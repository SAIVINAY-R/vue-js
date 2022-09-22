import axios from 'axios'

export default {
    removeFromMovies(context, payload) {
        context.commit('removeMovie', payload)
    },
    async loadMovies(context) {
        const response = await fetch(`https://localhost:44330/movies/`);
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
        axios({
            method: "post",
            url: "https://localhost:44330/movies/",
            data: movieFormData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(response => {
            const responseData = response.data;
            if(response.ok) {
                context.commit('addMovie', responseData.json());
            }
            payload.router.push('/movies')
        }).catch(err => {
            console.log(err.response.data)
        })
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
        axios({
            method: "put",
            url: "https://localhost:44330/movies/" + payload.id,
            data: movieFormData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(response => {
            const responseData = response.data;
            if(response.status == 200) {
                context.commit('editMovie', responseData);
            }
            payload.router.push('/movies')
        }).catch(err => {
            console.log(err.response.data)
        })
    },
    async setMovie(context, payload) {
        const response = await fetch(`https://localhost:44330/movies/${ payload.id }`);
        const responseData = await response.json();

        if (!response.ok){
            context.commit('setMovie', {})
        }
        else {
            context.commit('setMovie', responseData)
        }
    },
    async deleteMovie(context, payload) {
        const response = await fetch(`https://localhost:44330/movies/${ payload.id }`, { method: 'DELETE' })

        if(response.ok) {
            context.commit('removeMovie', payload)
        }
    }
}