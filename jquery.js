$(document).ready(function() {
    // Inisialisasi Tabs
    $("#tabs").tabs();

    // Inisialisasi Datepicker
    $(".datepicker").datepicker({
        dateFormat: 'dd-mm-yy',
        minDate: 0,
        maxDate: '+1M'
    });

    // Inisialisasi Slick Carousel
    $('.book-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Data untuk Autocomplete pencarian buku
    const bookTitles = [
        "Resep Masakan Nusantara",
        "Panduan Video Editing",
        "Cara Berpikir Kritis"
    ];

    // Inisialisasi Autocomplete
    $("#searchBook").autocomplete({
        source: bookTitles,
        minLength: 2
    });

    // Handle form submission dengan dialog konfirmasi
    $("#loanForm").on('submit', function(e) {
        e.preventDefault();
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "Ya": function() {
                    $(this).dialog("close");
                    // Animasi feedback sukses
                    $("<div>")
                        .addClass("success-message")
                        .text("Peminjaman berhasil diajukan!")
                        .insertAfter("#loanForm")
                        .fadeIn()
                        .delay(2000)
                        .fadeOut();
                    $("#loanForm")[0].reset();
                },
                "Tidak": function() {
                    $(this).dialog("close");
                }
            }
        });
    });
}); 