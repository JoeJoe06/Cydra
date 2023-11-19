const apiKey = "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"


export async function chatgpt(userinput) {

    const apiURL = "https://api.openai.com/v1/chat/completions"

    const request = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": userinput }]
        })


    })


    const response = await request.json();

    return (response.choices[0].message.content);
}








// let history = [
//     { "role": "system", "content": "You are a coding tutor bot to help user write and optimize python code." }
// ];


// function chatHistory(role, userInput) {
//     history.push({ role: `${role}`, content: `${userInput}` });
// }



// async function chatgpt(userInput) {
//     chatHistory("user", userInput)

//     const request = await openai.chat.completions.create(
//         {
//             model: "gpt-3.5-turbo",
//             messages: history,

//         },
//     );

//     chatHistory("user", request.choices[0].message.content);
//     console.log(request.choices[0].message.content);
// }



// export { chatgpt };