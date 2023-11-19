import { chatgpt } from './chatbot.mjs'

$("document").ready(() => {
    $("#input").keypress(async (key) => { // Make the event handler async

        if ($("#input").val() == '') {
            return;
        }
        if (key.which == 13) {
            const inputBoxValue = $("#input").val();

            // Create and append the user's input div
            let $newDiv = $('<div class="msg" />').text(inputBoxValue);
            $("#view").hide();
            $("#msgs").append($newDiv);

            // Clear the input
            $("#input").val('');
            $("#input").prop('disabled', true)


            // Use await to wait for the chatgpt response

            let $proccessing = $('<div class="msg" />').text("Cydra <proccessing>...");
            $("#msgs").append($proccessing);

            // Update the user's input div with the ChatGPT response

            const responseValue = await chatgpt(inputBoxValue);
            $($proccessing).text(responseValue)
            $("#input").prop('disabled', false)

        }

        $('#msgs').animate({
            scrollTop: $('#msgs').get(0).scrollHeight
        }, 500);

    });
});