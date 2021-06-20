// sidebar
$(document).ready(function() {
    $('.burger-icon').click(function() {
        $(this).toggleClass('open');
        $('.app').toggleClass('sidebar-min');
        $('.link').toggleClass('nav-sub-sidebar-min-link');
    });
});


// accordion
var accordion = function() {
    // Read out the data attribute for type of accordion
    var data = $(".accordion").attr("data-accordion");

    // start the event Handler
    $(".accordion-header").on("click", function() {
        // Look out for the type of accordion open or close
        if (data === "close") {
            $(".accordion-body").slideUp();
            if ($(this).hasClass("active")) {
                $(this).toggleClass("active");
            } else {
                $(".accordion-header").removeClass("active");
                $(this).toggleClass("active");
            }
        } else {
            $(this).toggleClass("active");
        }
        $(this).next(".accordion-body").not(":animated").slideToggle();
    });
}

// Initialize the accordion in your document.ready function
accordion();

// tooltip
$(document).ready(function() {
    $.protip();
});

// sortable
$(function() {
    $("#sortable tbody").sortable({
        cursor: "move",
        placeholder: "sortable-placeholder",
        helper: function(e, tr) {
            var $originals = tr.children();
            var $helper = tr.clone();
            $helper.children().each(function(index) {
                // Set helper cell sizes to match the original sizes
                $(this).width($originals.eq(index).width());
            });
            return $helper;
        }
    }).disableSelection();
});

// select-all
function toggle(source) {
    checkboxes = document.getElementsByName('contact-user');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
};

// file
$(document).ready(function() {
    $('input[type=file]').change(function() {
        //console.log(this.files);
        var f = this.files;
        var el = $(this).parent();
        if (f.length > 1) {
            console.log(this.files, 1);
            el.text('Sorry, multiple files are not allowed');
            return;
        }
        // el.removeClass('focus');
        el.html(f[0].name +
            '<span class="sml">' +
            'type: ' + f[0].type + ', ' +
            Math.round(f[0].size / 1024) + ' KB</span>');
    });

    $('input[type=file]').on('focus', function() {
        $(this).parent().addClass('focus');
    });

    $('input[type=file]').on('blur', function() {
        $(this).parent().removeClass('focus');
    });

});

// tab
$(document).ready(function() {

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})

// navigation
$(document).ready(function() {
    $('.nav-link.nav-sub-link').click(function() {
        $(this).toggleClass('open');
        $(this).find('.nav-sub').slideToggle("fast");
        $(this).find('.btn-icon').toggleClass('active');
    });
});

// folder
$(document).ready(function() {
    $('.folder-item').click(function() {
        $(this).toggleClass('open');
        $(this).find('.folder-sub').slideToggle("fast");
        $(this).find('.btn-icon').toggleClass('active');
    });
});

// report
$(document).ready(function() {
    $('.report-item').click(function() {
        $(this).toggleClass('open');
        $(this).find('.report-sub').slideToggle("fast");
        $(this).find('.btn-icon').toggleClass('active');
    });
});

// manager-select

$('.manager-select .input').change(function() {
    if ($(this).is(':checked')) {
        $(this).parent().next('.manager-list-item-top').toggleClass("active");
    }
});

// mobile-menu click
$(document).ready(function() {
    $('#menuToggle input').click(function() {
        $('body').toggleClass('no-scroll');
    });
});

// sidebar-min navigation

$(document).ready(function() {
    $(document).on('click', '.nav-sub-sidebar-min-link', function() {
        var popupMenu = $(this).find('.popup-menu');
        popupMenu.toggleClass('active').trigger('dropdownClick', popupMenu);
    });

    $(document).on('dropdownClick', function(event, item) {
        $(document).find('.popup-menu').not(item).removeClass('active');
    });
});

// table-search
$("#table-search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

// table
$(function() {
    const ths = $("th");
    let sortOrder = 1;

    ths.on("click", function() {
        const rows = sortRows(this);
        rebuildTbody(rows);
        updateClassName(this);
        sortOrder *= -1; //反転
    })

    function sortRows(th) {
        const rows = $.makeArray($('tbody > tr'));
        const col = th.cellIndex;
        const type = th.dataset.type;
        rows.sort(function(a, b) {
            return compare(a, b, col, type) * sortOrder;
        });
        return rows;
    }

    function compare(a, b, col, type) {
        let _a = a.children[col].textContent;
        let _b = b.children[col].textContent;
        if (type === "number") {
            _a *= 1;
            _b *= 1;
        } else if (type === "string") {
            //全て小文字に揃えている。toLowerCase()
            _a = _a.toLowerCase();
            _b = _b.toLowerCase();
        }

        if (_a < _b) {
            return -1;
        }
        if (_a > _b) {
            return 1;
        }
        return 0;
    }

    function rebuildTbody(rows) {
        const tbody = $("tbody");
        while (tbody.firstChild) {
            tbody.remove(tbody.firstChild);
        }

        let j;
        for (j = 0; j < rows.length; j++) {
            tbody.append(rows[j]);
        }
    }

    function updateClassName(th) {
        let k;
        for (k = 0; k < ths.length; k++) {
            ths[k].className = "";
        }
        th.className = sortOrder === 1 ? "asc" : "desc";
    }

});

// mask
$(document).ready(function() {
    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
});
$(document).ready(function() {
    $('.time').mask("00:00", { placeholder: "__:__" });
});

// feather
feather.replace()

// country
function onChangeCallback(ctr) {
    console.log("The country was changed: " + ctr);
    //$("#selectionSpan").text(ctr);
}

$(document).ready(function() {
    $(".niceCountryInputSelector").each(function(i, e) {
        new NiceCountryInput(e).init();
    });
});

// validate
$('form').validator();

// dropdown
$(function() {

    $('.dropdown').click(function() {
        $(this).next('.dropdown-menu').toggle();
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown') && !$(target).parents().is('.dropdown')) {
            $('.dropdown-menu').hide();
        }
    });

});

// date today

var date = new Date();

var day = ("0" + date.getDate()).slice(-2);
var month = ("0" + (date.getMonth() + 1)).slice(-2);

var today = date.getFullYear() + "-" + (month) + "-" + (day);

$('#startdateId').val(today);

// phone
var input = document.querySelector("#phone");
window.intlTelInput(input, {
    initialCountry: "TR",
    utilsScript: "utils.js",
});