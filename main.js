$(".spoilers-group div .sidebarTaxonomyCollapse").on("click", function() {
      let container = $(this).parent();
      if (!container.hasClass("active")) {
        container
          .parent()
          .find("div.active")
          .each(function() {
            let rest = $(this);
            rest
              .find(".Rectangle-14-Copy")
              .slideUp(function() {
                rest.removeClass("active");
                container.find(".Rectangle-14-Copy").slideDown(function() {
                  container.addClass("active");
                });
              });
          });

      }

    });
