function uppercaseText() {
    const box = document.getElementById("textBox");
    box.value = box.value.toUpperCase();
}

function lowercaseText() {
    const box = document.getElementById("textBox");
    box.value = box.value.toLowerCase();
}

function copyText() {
    const box = document.getElementById("textBox");

    if (box.value.trim() === "") {
        alert("Type something first!");
        return;
    }

    navigator.clipboard.writeText(box.value);
    alert("Copied! ⚡");
}

function clearText() {
    document.getElementById("textBox").value = "";
}


// WORD & CHARACTER COUNTER

document.addEventListener("DOMContentLoaded", function () {

    const toolsSection = document.getElementById("tools");

    const counter = document.createElement("div");

    counter.className = "text-tool";

    counter.innerHTML = `
        <h3>🔢 Word & Character Counter</h3>

        <p>Write something below to count your words and characters.</p>

        <textarea
            id="counterBox"
            placeholder="Type or paste your text here..."
        ></textarea>

        <p>
            Words: <strong id="wordCount">0</strong>
            &nbsp; | &nbsp;
            Characters: <strong id="charCount">0</strong>
        </p>
    `;

    toolsSection.appendChild(counter);

    const box = document.getElementById("counterBox");

    box.addEventListener("input", function () {

        const text = box.value.trim();

        const words = text === "" ? 0 : text.split(/\s+/).length;

        document.getElementById("wordCount").textContent = words;

        document.getElementById("charCount").textContent =
            box.value.length;
    });

});
// PASSWORD GENERATOR

document.addEventListener("DOMContentLoaded", function () {

    const toolsSection = document.getElementById("tools");

    const generator = document.createElement("div");

    generator.className = "text-tool";

    generator.innerHTML = `
        <h3>🔐 Password Generator</h3>

        <p>Create a random password for your accounts.</p>

        <input
            id="passwordLength"
            type="number"
            min="8"
            max="32"
            value="16"
            placeholder="Password length"
        >

        <button onclick="generatePassword()">
            GENERATE
        </button>

        <textarea
            id="passwordResult"
            readonly
            placeholder="Your password will appear here..."
        ></textarea>

        <button onclick="copyPassword()">
            COPY PASSWORD
        </button>
    `;

    toolsSection.appendChild(generator);
});


function generatePassword() {

    const length = Math.min(
        32,
        Math.max(
            8,
            Number(document.getElementById("passwordLength").value) || 16
        )
    );

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*";

    const randomValues = new Uint32Array(length);

    crypto.getRandomValues(randomValues);

    let password = "";

    for (let i = 0; i < length; i++) {
        password += characters[randomValues[i] % characters.length];
    }

    document.getElementById("passwordResult").value = password;
}


function copyPassword() {

    const password =
        document.getElementById("passwordResult").value;

    if (!password) {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(password);

    alert("Password copied! 🔐");
}