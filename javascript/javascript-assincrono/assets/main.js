const muPromise = new Promise((resolve, reject) => {
window.setTimeout(() => {
    resolve(console.log('Resolvida'));

},2000);

});

await myPromise
        .then((result) => result + 'passando pelo then')//.then é que será feito caso a promise seja bem sucedida, pode ser mais de uma operação
        .then((result) => result + 'e agora acabou')
        .catch((err)=> console.log(err.message));//tratando se houver algum erro, pode ser capturado o erro com o catch

        //Apos dois segundo irá retornar o valor

        //Resolvida passando pelo then e agora acabou
        // Para pegar o resultado é necessário o uso do await


        /*Async/await*/
        async function resolvePromise(){
            const myPromise = new Promise((resolve,reject) => {
                window.setTimeout(() => {
                    resolve('Resolvida');
                },3000);
            });

            const resolved = await myPromise
                    .then((result)=> result + 'passando pelo then')
                    .then((result) => result + 'e agora acabou!')
                    .catch((err) => console.log(err.message));
                    return resolved;
        }

        //utilizando try...catch
        async function resolvePromise(){
            const myPromise = new Promise((resolve,reject) => {
                window.setTimeout(() => {
                    resolve('Resolvida');
                },3000);
            });
            let result;
            try{
                result = await myPromise
                .then((result)=> result + 'passando pelo then')
                .then((result) => result + 'e agora acabou!')
            }catch(err){
                result = err.message;
            }
        }