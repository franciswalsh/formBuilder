for (let i in formData){

  if (formData[i].type != "select"){

    input_wrap = document.querySelector("#input_wrap");

    var input_tag = document.createElement("input");

    var attType = document.createAttribute("type");
    attType.value = formData[i].type;
    input_tag.setAttributeNode(attType);

    var attValue = document.createAttribute("value");
    attValue.value = formData[i].value;
    input_tag.setAttributeNode(attValue);

    var attID = document.createAttribute("id");
    attID.value = formData[i].id;
    input_tag.setAttributeNode(attID);

    var attIcon = document.createAttribute("icon");
    attIcon.value = formData[i].icon;
    input_tag.setAttributeNode(attIcon);

    input_wrap.appendChild(input_tag);

  }
  else {
    input_wrap = document.querySelector("#input_wrap");

    var input_tag1 = document.createElement("select");

    var select = document.querySelector("select");

    for (let j in formData[i].options){

      var option = document.createElement("option");

      var attValue = document.createAttribute("value");
      attValue.value = formData[i].options[j].value;
      option.setAttributeNode(attValue);

      var attLabel = document.createAttribute("label");
      attLabel.value = formData[i].options[j].label;
      option.setAttributeNode(attLabel);

      input_tag1.appendChild(option);
      }

      input_wrap.appendChild(input_tag1);
    }
}
