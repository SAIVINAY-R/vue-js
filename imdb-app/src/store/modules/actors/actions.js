export default {
    async loadActors(context) {
        const response = await fetch(`https://localhost:44330/actors/`);
        const responseData = await response.json();
        
        if (!response.ok){
            context.commit('setActors', {})
        }
        else {
            context.commit('setActors', responseData)
        }
    },
    async addActor(context, payload) {
        var response = null;
        await fetch(`https://localhost:44330/actors/`, { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },  
            method: "POST",
            body: JSON.stringify(payload)
        }).then(data => {
            response = data 
        })
        const responseData = await response.json();

        if(response.ok) {
            context.commit('addActor', responseData);
        }
    }
}