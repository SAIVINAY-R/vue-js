export default {
    async loadProducers(context) {
        const response = await fetch(`https://localhost:44330/producers/`);
        const responseData = await response.json();

        if (!response.ok){
            context.commit('setProducers', {})
        }
        else {
            context.commit('setProducers', responseData)
        }
    },
    async addProducer(context, payload) {
        var response = null;
        await fetch(`https://localhost:44330/producers/`, { 
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
            context.commit('addProducer', responseData);
        }
    }
}