//addClass()

function addClass() {
    // var cat = window.location.pathname
    var cat = window.location.href
    $('.dropdown').each((i, data) => {
        var href = $(data).children('a').attr("href")
        if (cat == href) {
            $(data).children('a').addClass('active')
        }
    })
}