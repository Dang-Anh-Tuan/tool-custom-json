const elType = document.querySelector("#type");
const elContent = document.querySelector("#content");
const elResult = document.querySelector("#result");

let type = elType.value;
let content = elContent.value;

elType.onchange = function (e) {
  type = e.target.value;
  setContent()
  setJson();
};

elContent.oninput = function (e) {
  setContent()
  setJson();
};

function setJson() {
  const typeRender = type === "list" ? "html" : type;
  elResult.textContent = `{
    "type": "${typeRender}",
    "value": "${content}"
  },`;
}

function setContent() {
  const textContent = elContent.value;
  switch (type) {
    case "p_bold":

    case "p_title":
    case "p":
    case "stepTitle":
    case "stepImg":
      content = textContent;
      break;
    case "list":
      const textContentArr = textContent?.split("\n");
      content = `<ol class=\"list_disc_inside\">${textContentArr.map((item) => `<li>${item}</li>`).join("")}</ol>`;
      break;
  }
}
