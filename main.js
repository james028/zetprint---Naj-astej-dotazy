
    var acc = document.getElementsByClassName("sidebarTaxonomyCollapse");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var showPanel = this.nextElementSibling;
            if (showPanel.style.display === "block") {
                showPanel.style.display = "none";
            } else {
                showPanel.style.display = "block";
            }
            if (showPanel.style.maxHeight){
                showPanel.style.maxHeight = null;
            } else {
                showPanel.style.maxHeight = showPanel.scrollHeight + "px";
            }
        }
    }
