      window.addEventListener("load", () => {
      const input = document.getElementById("input");
      const filewrapper = document.getElementById("filewrapper");

      input.addEventListener("change", (e) => {
        let fileName = e.target.files[0].name;
        let fileType = e.target.value.split(".").pop();
        fileshow(fileName, fileType, e.target.files[0]);
      });

      const fileshow = (fileName, fileType, file) => {
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");

        const leftElem = document.createElement("div");
        leftElem.classList.add("left");

        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML = fileType;

        leftElem.append(fileTypeElem);

        // Create a clickable link with the file name
        const filetitleElem = document.createElement("a");
        filetitleElem.href = URL.createObjectURL(file);
        filetitleElem.target = "_blank"; // Open the link in a new tab
        filetitleElem.innerHTML = fileName;
        leftElem.append(filetitleElem);

        showfileboxElem.append(leftElem);

        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);

        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.appendChild(crossElem);

        filewrapper.append(showfileboxElem);

        crossElem.addEventListener("click", ()=>{
         filewrapper.removeChild(showfileboxElem);

        })
        // Display the uploaded file
       /*const fileViewer = document.getElementById("fileviewer");
        fileViewer.innerHTML = ""; // Clear previous content

        if (fileType.startsWith("image")) {
          const imageElem = document.createElement("img");
          imageElem.src = URL.createObjectURL(file);
          fileViewer.appendChild(imageElem);
        } else if (fileType === "pdf") {
          const embedElem = document.createElement("embed");
          embedElem.src = URL.createObjectURL(file);
          embedElem.type = "application/pdf";
          fileViewer.appendChild(embedElem);
        } else {
          const unsupportedElem = document.createElement("p");
          unsupportedElem.textContent = "Unsupported file type. Cannot display the file.";
          fileViewer.appendChild(unsupportedElem);
        }*/
      };
    });
  