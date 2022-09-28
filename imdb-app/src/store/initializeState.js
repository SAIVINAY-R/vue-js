import ApiServices from "@/services/services";

const getters = {
    getGenres(state) {
        var genres = []
        for(let i = 0; i < state.genres.length; i++) {
            genres.push({
                text: state.genres[i].name,
                value: state.genres[i].id
            })

        }
        return genres;
    },
    hasGenres(state) {
        return state.genres && state.genres.length > 0;
    },
    getMovies(state) {
        return state.movies;
    },
    hasMovies(state) {
        return state.movies && state.movies.length > 0;
    },
    getProducers(state) {
        var producers = []
        for(let i = 0; i < state.producers.length; i++) {
            producers.push({
                text: state.producers[i].name,
                value: state.producers[i].id
            })
        }
        return producers;
    },
    getProducersWithDetails(state) {
        return state.producers;
    },
    hasProducers(state) {
        return state.producers && state.producers.length > 0;
    },
    getActors(state) {
        var actors = []
        for(let i = 0; i < state.actors.length; i++) {
            actors.push({
                text: state.actors[i].name,
                value: state.actors[i].id
            });

        }
        return actors;
    },
    getActorsWithDetails(state) {
        return state.actors;
    },
    hasActors(state) {
        return state.actors && state.actors.length > 0;
    },
}

const mutations = {
    setActors(state, payload) {
        state.actors = payload;
    },
    addActor(state, payload) {
        state.actors.push(payload);
    },
    setGenres(state, payload) {
        state.genres = payload;
    },
    removeMovie(state, payload) {
        const movieIndex = state.movies.findIndex(movie => movie.id === payload.id)
        state.movies.splice(movieIndex,1)
    },
    setMovies(state, payload) {
        state.movies = payload;
    },
    addMovie(state, payload) {
        state.movies.push(payload)
    },
    editMovie(state, payload) {
        const index = state.movies.findIndex(movie => movie.id == payload.id)
        state.movies[index] = payload
    },
    setMovie(state, payload) {
        state.movie = payload;
    },
    setProducers(state, payload) {
        state.producers = payload;
    },
    addProducer(state, payload) {
        state.producers.push(payload);
    }
}

const actions = {
    async loadMovies(context) {
        const response = await ApiServices.get(`movies/`);
        const responseData = await response.json();

        if (!response.ok){
            context.commit('setMovies', {})
        }
        else {
            context.commit('setMovies', responseData)
        }
    },
    async addMovie(context, payload) {
        var movieFormData = new FormData();
        movieFormData.append("name", payload.name)
        movieFormData.append("plot", payload.plot)
        for(var i = 0; i < payload.actorIds.length; i++) {
            movieFormData.append("actorIds", payload.actorIds[i])
        }
        for(var j = 0; j < payload.genres.length; j++) {
            movieFormData.append("genres", payload.genres[j])
        }
        movieFormData.append("coverImage", payload.coverImage)
        movieFormData.append("producerId", payload.producerId)
        movieFormData.append("yearOfRelease", payload.yearOfRelease)
        var response = await ApiServices.postFormData(`movies/`, movieFormData)
        const responseData = response.data;
        if(response.status === 201) {
            context.commit('addMovie', responseData);
        }
        payload.router.push('/movies')
    },
    async editMovie(context, payload) {
        var movieFormData = new FormData();
        movieFormData.append("name", payload.name)
        movieFormData.append("plot", payload.plot)
        for(var i = 0; i < payload.actorIds.length; i++) {
            movieFormData.append("actorIds", payload.actorIds[i])
        }
        for(var j = 0; j < payload.genres.length; j++) {
            movieFormData.append("genres", payload.genres[j])
        }
        movieFormData.append("coverImage", payload.coverImage)
        movieFormData.append("producerId", payload.producerId)
        movieFormData.append("yearOfRelease", payload.yearOfRelease)
        movieFormData.append("id", payload.id)
        var response = await ApiServices.putFormData("movies/" + payload.id, movieFormData)
        const responseData = response.data;
        if(response.status === 200) {
            context.commit('editMovie', responseData);
        }
        payload.router.push('/movies')
    },
    async setMovie(context, payload) {
        const response = await ApiServices.get(`movies/${ payload.id }`);
        const responseData = await response.json();

        if (!response.ok){
            context.commit('setMovie', {})
        }
        else {
            context.commit('setMovie', responseData)
        }
    },
    async deleteMovie(context, payload) {
        const response = await ApiServices.delete(`movies/${ payload.id }`)

        if(response.ok) {
            context.commit('removeMovie', payload)
        }
    },
    async loadActors(context) {
        const response = await ApiServices.get('actors/');
        const responseData = await response.json();
        
        if (!response.ok){
            context.commit('setActors', {})
        }
        else {
            context.commit('setActors', responseData)
        }
    },
    async addActor(context, payload) {
        var response = await ApiServices.postJsonData('actors', payload)
        const responseData = response.data

        if(response.status === 201) {
            context.commit('addActor', responseData);
        }
    },
    async loadGenres(context) {
        const response = await ApiServices.get(`genres`);
        const responseData = await response.json();

        if (!response.ok){
            context.commit('setGenres', {})
        }
        else {
            context.commit('setGenres', responseData)
        }
    },
    async loadProducers(context) {
        const response = await ApiServices.get('producers');
        const responseData = await response.json();

        if (!response.ok){
            context.commit('setProducers', {})
        }
        else {
            context.commit('setProducers', responseData)
        }
    },
    async addProducer(context, payload) {
        var response = await ApiServices.postJsonData(`producers`, payload)
        const responseData = response.data;

        if(response.status === 201) {
            context.commit('addProducer', responseData);
        }
    }
}

export {
    getters,
    actions,
    mutations
}