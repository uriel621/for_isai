/*jshint esversion: 6 */
 (() => {
    return {
        init: (function () {
            document.querySelector("#uriel621").setAttribute("class", "container");
            chat_area();
            chat_message();
            message();
            messages_textarea();
            send_button();
        }())
    };
})();

function chat_area () {
    const uriel621 = document.querySelector("#uriel621");
    const chat_div = document.createElement("div");
    chat_div.setAttribute("id", "message_view")
    uriel621.appendChild(chat_div);
}

function chat_message () {
    const chat_area = document.querySelector("#message_view");
    const chat_ul = document.createElement("ul");
    chat_ul.setAttribute("id", "chat_messages");
    chat_area.appendChild(chat_ul);
}

function message () {
    const uriel621 = document.querySelector("#uriel621");
    const message_div = document.createElement("div");
    message_div.setAttribute("id", "message_write");
    uriel621.appendChild(message_div);
}
function messages_textarea () {
    const message_div = document.querySelector("#message_write");
    const message_textarea = document.createElement("textarea");
    message_textarea.setAttribute("class", "form-control"); 
    message_textarea.setAttribute("id", "messages_textarea");
    message_textarea.setAttribute("placeholder", "type your message");
    message_div.appendChild(message_textarea);
}

function send_button () {
    const message_write = document.querySelector("#message_write");
    const send_button = document.createElement("button");
    send_button.setAttribute("class", "pull-right btn btn-success");
    send_button.innerHTML = "Send";
    message_write.appendChild(send_button);
}