$(document).ready(function () {
    $(document).keypress(function (e) {
        if (e.which == 13) {
            let searchValue = document.getElementById("search").value;
            let webLink = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + encodeURIComponent(searchValue) + "&utf8=&format=json&origin=*";
            $.ajax({
                url: webLink,
                dataType: "json",
                success: function (data) {
                    $(".searchResult").remove();
                    for (let i = 0; i < data.query.search.length; i++) {
                        let title = data.query.search[i].title;
                        let snippet = data.query.search[i].snippet;
                        let pageUrl = "https://en.wikipedia.org/wiki/" + encodeURIComponent(title.replace(/ /g, "_"));
                        $("#searchBox").append(
                            '<a href="' + pageUrl + '" target="_blank" style="text-decoration:none">' +
                            '<div class="searchResult">' +
                            '<span class="searchTitle">' + title + '</span><span><br />' + snippet + '</span></div></a>'
                        );
                    }
                },
            });
        }
    });
});