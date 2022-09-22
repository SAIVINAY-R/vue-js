export default {
    async loadGenres(context) {
        const response = await fetch(`https://localhost:44330/genres/`);
        const responseData = await response.json();

        if (!response.ok){
            context.commit('setGenres', {})
        }
        else {
            context.commit('setGenres', responseData)
        }
    }
}