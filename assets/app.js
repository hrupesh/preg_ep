var d = new Date();

// var default_date = Date(d.getDate(), (d.getMonth()+1), d.getFullYear());
// console.log(default_date);

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}


var default_date = new Date(d.toDateString());
var default_date1 = (d.getMonth() + 1) + '/' + (default_date.getDate() - 7) + '/' + d.getFullYear();
var default_date2 = (d.getMonth() + 1) + '/' + (default_date.getDate() - 1) + '/' + d.getFullYear();
var default_date3 = (d.getMonth() + 1) + '/' + (default_date.getDate()) + '/' + d.getFullYear();
var default_date4 = (d.getMonth() + 1) + '/' + (default_date.getDate()) + '/' + d.getFullYear();
// console.log(default_date);
// default_date.setDate(default_date.getDate(-7));
console.log(default_date);

$(window).on('load', function () {
    $('#date-input').val(default_date1);
    $('#date-input2').val(default_date2);
    $('#date-input3').val(default_date3);
    $('#date-input4').val(default_date4);
})

function calculate_last_peroid() {
    // alert('calcluating.........');
    // console.log(event.target);
    window.scrollTo(0,0);

    var ftd = document.getElementById('f-t-date');
    var std = document.getElementById('s-t-date');
    var ttd = document.getElementById('t-t-date');
    // var due_date = document.getElementById('c-due-date');
    ftd.style.transform = 'translateX(5000px)';
    std.style.transform = 'translateX(5000px)';
    ttd.style.transform = 'translateX(5000px)';
    // due_date.style.transform = 'translateX(5000px)';

    var lpdate = document.getElementById('date-input').value;

    var lp_date = new Date(lpdate);
    // console.log(lp_date);

    // var preg_days = new Date();
    // console.log(preg_days);
    // preg_days.setDate(lp_date.getDate() - preg_days.getDate());
    // console.log(preg_days);


    var month_name = function (dt) {
        mlist = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return mlist[dt.getMonth()];
    };


    due_date_uf = lp_date.addDays(280);

    var cycle = document.getElementById('cycle').value;
    var cycle = parseInt(cycle);

    console.log(cycle);

    var dts=0;

    switch(cycle){
        case 21:
            dts = 7;
            break;
            
        case 22:
            dts = 6;
            break;

        case 23:
            dts = 5;
            break;

        case 24:
            dts = 4;
            break;

        case 25:
            dts = 3;
            break;

        case 26:
            dts = 2;
            break;

        case 27:
            dts = 1;
            break;

        case 28:
            dts = 0;
            break;

        case 29:
            dts = -1;
            break;

        case 30:
            dts = -2;
            break;

        case 31:
            dts = -3;
            break;

        case 32:
            dts = -4;
            break;

        case 33:
            dts = -5;
            break;

        case 34:
            dts = -6;
            break;

        case 35:
            dts = -7;
            break;

        default:
            dts = 0;
            break;
    }

    console.log(dts);

    due_date_uf.setDate(due_date_uf.getDate() - dts);

    console.log(month_name(new Date(due_date_uf)));

    due_date_f = (month_name(new Date(due_date_uf))) + ' ' + due_date_uf.getDate() + ', ' + due_date_uf.getFullYear();

    console.log("Due Date is: " + due_date_f);


    var result_box = document.getElementById('result');
    var c_due_date = document.getElementById('c-due-date');
    // console.log(c_due_date);

    result_box.style.display = 'block';
    c_due_date.innerHTML = due_date_f;

    var c_due_date_month = document.getElementById('c-due-date-month');
    var c_due_date_day = document.getElementById('c-due-date-day');
    var c_due_date_year = document.getElementById('c-due-date-year');

    c_due_date_month.textContent = month_name(new Date(due_date_uf));
    c_due_date_day.textContent = due_date_uf.getDate();
    c_due_date_year.textContent = due_date_uf.getFullYear();

    var first_trimester = lp_date.addDays(90);
    var second_trimester = lp_date.addDays(188);
    var third_trimester = lp_date.addDays(280);

    console.log(first_trimester);
    console.log(second_trimester);
    console.log(third_trimester);

    var pgbar = document.getElementById('progress-bar');
    

    cur_date = new Date();
    var diffrence_time = due_date_uf.getTime() - cur_date.getTime();
    // console.log(cur_date);
    // console.log(diffrence_time);
    var diffrence_date = diffrence_time / (1000 * 3600 * 24);
    diffrence_date = Math.round(diffrence_date);
    console.log("Days Left : " + diffrence_date);
    var days_elapsed = 280 - diffrence_date;
    console.log("Days Elapsed : " + days_elapsed);

    var days_elapsed_week = parseInt(days_elapsed / 7);
    var days_elapsed_days = parseInt(days_elapsed % 7);

    console.log("You are : " + days_elapsed_week + " weeks pregnant.");
    console.log("You are : " + days_elapsed_days + " days pregnant.");

    var you_are = document.getElementById('you-are');
    if(days_elapsed_days == 0){
        you_are.innerHTML = " " + days_elapsed_week + " weeks ";
    }
    else if(days_elapsed_week == 0){
        you_are.innerHTML = " " + days_elapsed_days + " days ";
    }
    else{
        you_are.innerHTML = " " + days_elapsed_week + " weeks and " + days_elapsed_days + " days ";
    }

    if(days_elapsed_week <= 0 && days_elapsed_days <= 0){
        var you_are_container = document.getElementById('you-are-container');
        var dd_text = document.getElementById('dd-text');
        dd_text.textContent = " Your due date would be ";
        c_due_date.textContent = due_date_f;
        var greet = document.getElementById('greet');
        greet.style.visibility = 'hidden';
        you_are_container.style.display = 'none';
        // you_are.innerHTML = " in the process of getting ";
    }else{
        var you_are_container = document.getElementById('you-are-container');
        you_are_container.style.display = 'block';
        var greet = document.getElementById('greet');
        greet.style.visibility = 'visible';
        var dd_text = document.getElementById('dd-text');
        dd_text.textContent = " Your due date is ";
    }

    progress_percentage = days_elapsed * 100 / 280;
    progress_percentage = Math.round(progress_percentage);


    if (progress_percentage > 85) {
        progress_percentage -= 3;
    }
    var w = screen.width;
    if(w < 600){
        if (progress_percentage > 85) {
            progress_percentage -= 3;
        }
    }

    console.log(progress_percentage);

    
    var i = 0;
    var width = -1;
    var id = setInterval(frame, 80);
    
    var pg_icon = document.getElementById('pg-icon');

    function frame() {
        if (progress_percentage <= 0){
            pgbar.style.width = 0 + "%";
            pg_icon.style.left = -1 + "%";
            clearInterval(id);
        }
        if (width >= progress_percentage) {
            clearInterval(id);
            i = 0
        }
        else {
            width++;
            pgbar.style.width = width + "%";
            if(w < 600 ){
                pg_icon.style.left = width-5 + "%";
            }else{
                pg_icon.style.left = width-2 + "%";
            }
        }

    }

    var datesInterval = setInterval(setDates,1000);

    function setDates(){
        var ftd = document.getElementById('f-t-date');
        var std = document.getElementById('s-t-date');
        var ttd = document.getElementById('t-t-date');
        // var due_date = document.getElementById('c-due-date');
        ftd.style.transform = 'translateX(0)';
        ftd.innerHTML = "1st Trimester <br> Ends at " + first_trimester.getDate() + ", " + (month_name(new Date(first_trimester)));
        std.style.transform = 'translateX(0)';
        std.innerHTML = "2nd Trimester <br> Ends at " + second_trimester.getDate() + ", " + (month_name(new Date(second_trimester)));
        ttd.style.transform = 'translateX(0)';
        ttd.innerHTML = "3rd Trimester <br> Ends at " + third_trimester.getDate() + ", " + (month_name(new Date(third_trimester)));
        // due_date.style.transform = 'translateX(0)';
        clearInterval(datesInterval);
    }

}

function calculate_conception_date() {
    // alert('calcluating.........');
    // console.log(event.target);
    window.scrollTo(0,0);

    var ftd = document.getElementById('f-t-date');
    var std = document.getElementById('s-t-date');
    var ttd = document.getElementById('t-t-date');
    // var due_date = document.getElementById('c-due-date');
    ftd.style.transform = 'translateX(5000px)';
    std.style.transform = 'translateX(5000px)';
    ttd.style.transform = 'translateX(5000px)';
    // due_date.style.transform = 'translateX(5000px)';

    var lpdate = document.getElementById('date-input2').value;

    var lp_date = new Date(lpdate);


    var month_name = function (dt) {
        mlist = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return mlist[dt.getMonth()];
    };

    due_date_uf = lp_date.addDays(266);

    console.log(month_name(new Date(due_date_uf)));

    due_date_f = (month_name(new Date(due_date_uf))) + ' ' + due_date_uf.getDate() + ', ' + due_date_uf.getFullYear();

    console.log("Due Date is: " + due_date_f);


    var result_box = document.getElementById('result');
    var c_due_date = document.getElementById('c-due-date');

    var c_due_date_month = document.getElementById('c-due-date-month');
    var c_due_date_day = document.getElementById('c-due-date-day');
    var c_due_date_year = document.getElementById('c-due-date-year');

    c_due_date_month.textContent = month_name(new Date(due_date_uf));
    c_due_date_day.textContent = due_date_uf.getDate();
    c_due_date_year.textContent = due_date_uf.getFullYear();
    
    result_box.style.display = 'block';
    c_due_date.innerHTML = due_date_f;
    
    var first_trimester = lp_date.addDays(76);
    var second_trimester = lp_date.addDays(174);
    var third_trimester = lp_date.addDays(266);

    console.log(first_trimester);
    console.log(second_trimester);
    console.log(third_trimester);

    var pgbar = document.getElementById('progress-bar');

    cur_date = new Date();
    var diffrence_time = due_date_uf.getTime() - cur_date.getTime();
    // console.log(cur_date);
    // console.log(diffrence_time);
    var diffrence_date = diffrence_time / (1000 * 3600 * 24);
    diffrence_date = Math.round(diffrence_date);
    console.log("Days Left : " + diffrence_date);
    var days_elapsed = 280 - diffrence_date;
    console.log("Days Elapsed : " + days_elapsed);

    var days_elapsed_week = parseInt(days_elapsed / 7);
    var days_elapsed_days = parseInt(days_elapsed % 7);

    console.log("You are : " + days_elapsed_week + " weeks pregnant.");
    console.log("You are : " + days_elapsed_days + " days pregnant.");

    var you_are = document.getElementById('you-are');
    if(days_elapsed_days == 0){
        you_are.innerHTML = " " + days_elapsed_week + " weeks ";
    }
    else if(days_elapsed_week == 0){
        you_are.innerHTML = " " + days_elapsed_days + " days ";
    }
    else{
        you_are.innerHTML = " " + days_elapsed_week + " weeks and " + days_elapsed_days + " days ";
    }

    if(days_elapsed_week <= 0 && days_elapsed_days <= 0){
        var dd_text = document.getElementById('dd-text');
        var you_are_container = document.getElementById('you-are-container');
        dd_text.textContent = " Your due date would be ";
        c_due_date.textContent = due_date_f;
        var greet = document.getElementById('greet');
        greet.style.visibility = 'hidden';
        you_are_container.style.display = 'none';
        // you_are.innerHTML = " in the process of getting ";
    }else{
        var you_are_container = document.getElementById('you-are-container');
        you_are_container.style.display = 'block';
        var greet = document.getElementById('greet');
        greet.style.visibility = 'visible';
        var dd_text = document.getElementById('dd-text');
        dd_text.textContent = " Your due date is ";
    }

    progress_percentage = days_elapsed * 100 / 280;
    progress_percentage = Math.round(progress_percentage);


    if (progress_percentage > 85) {
        progress_percentage -= 3;
    }
    var w = screen.width;
    if(w < 600){
        if (progress_percentage > 85) {
            progress_percentage -= 3;
        }
    }

    console.log(progress_percentage);

    var i = 0;
    var width = -1;
    var id = setInterval(frame, 80);
    
    var pg_icon = document.getElementById('pg-icon');
    
    function frame() {
        if (progress_percentage <= 0){
            pgbar.style.width = 0 + "%";
            pg_icon.style.left = -1 + "%";
            clearInterval(id);
        }
        if (width >= progress_percentage) {
            clearInterval(id);
            i = 0
        }
        else {
            width++;
            pgbar.style.width = width + "%";
            if(w < 600 ){
                pg_icon.style.left = width-5 + "%";
            }else{
                pg_icon.style.left = width-2 + "%";
            }
        }

    }

    var datesInterval = setInterval(setDates,1000);

    function setDates(){
        var ftd = document.getElementById('f-t-date');
        var std = document.getElementById('s-t-date');
        var ttd = document.getElementById('t-t-date');
        // var due_date = document.getElementById('c-due-date');
        ftd.style.transform = 'translateX(0)';
        ftd.innerHTML = "1st Trimester <br> Ends at " + first_trimester.getDate() + ", " + (month_name(new Date(first_trimester)));
        std.style.transform = 'translateX(0)';
        std.innerHTML = "2nd Trimester <br> Ends at " + second_trimester.getDate() + ", " + (month_name(new Date(second_trimester)));
        ttd.style.transform = 'translateX(0)';
        ttd.innerHTML = "3rd Trimester <br> Ends at " + third_trimester.getDate() + ", " + (month_name(new Date(third_trimester)));
        // due_date.style.transform = 'translateX(0)';
        clearInterval(datesInterval);
    }

}


function calculate_ultrasound_date() {
    // alert('calcluating.........');
    // console.log(event.target);
    window.scrollTo(0,0);

    var ftd = document.getElementById('f-t-date');
    var std = document.getElementById('s-t-date');
    var ttd = document.getElementById('t-t-date');
    // var due_date = document.getElementById('c-due-date');
    ftd.style.transform = 'translateX(5000px)';
    std.style.transform = 'translateX(5000px)';
    ttd.style.transform = 'translateX(5000px)';
    // due_date.style.transform = 'translateX(5000px)';

    var lpdate = document.getElementById('date-input4').value;

    var lp_date = new Date(lpdate);

    var weeks = document.getElementById('weeks').value;
    weeks = parseInt(weeks);
    var days = document.getElementById('days').value;
    days = parseInt(days);

    var total_days = parseInt((weeks * 7) + days);

    console.log(lp_date)
    console.log(weeks)
    console.log(days)
    console.log(total_days)

    var month_name = function (dt) {
        mlist = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return mlist[dt.getMonth()];
    };

    var days_left = parseInt(280 - total_days);

    due_date_uf = lp_date.addDays(days_left);

    console.log(month_name(new Date(due_date_uf)));

    due_date_f = (month_name(new Date(due_date_uf))) + ' ' + due_date_uf.getDate() + ',  ' + due_date_uf.getFullYear();

    console.log("Due Date is: " + due_date_f);


    var result_box = document.getElementById('result');
    var c_due_date = document.getElementById('c-due-date');

    result_box.style.display = 'block';
    c_due_date.innerHTML = due_date_f;

    var c_due_date_month = document.getElementById('c-due-date-month');
    var c_due_date_day = document.getElementById('c-due-date-day');
    var c_due_date_year = document.getElementById('c-due-date-year');

    c_due_date_month.textContent = month_name(new Date(due_date_uf));
    c_due_date_day.textContent = due_date_uf.getDate();
    c_due_date_year.textContent = due_date_uf.getFullYear();

    var conceived_date = new Date(lp_date);
    conceived_date.setDate(conceived_date.getDate() - total_days);
    console.log('Concieved On : '+conceived_date);

    var first_trimester = conceived_date.addDays(90);
    var second_trimester = conceived_date.addDays(188);
    var third_trimester = conceived_date.addDays(280);

    console.log(first_trimester);
    console.log(second_trimester);
    console.log(third_trimester);

    var pgbar = document.getElementById('progress-bar');

    cur_date = new Date();
    var diffrence_time = due_date_uf.getTime() - cur_date.getTime();
    // console.log(cur_date);
    // console.log(diffrence_time);
    var diffrence_date = diffrence_time / (1000 * 3600 * 24);
    diffrence_date = Math.round(diffrence_date);
    console.log("Days Left : " + diffrence_date);
    var days_elapsed = 280 - diffrence_date;
    console.log("Days Elapsed : " + days_elapsed);

    var days_elapsed_week = parseInt(days_elapsed / 7);
    var days_elapsed_days = parseInt(days_elapsed % 7);

    console.log("You are : " + days_elapsed_week + " weeks pregnant.");
    console.log("You are : " + days_elapsed_days + " days pregnant.");

    var you_are = document.getElementById('you-are');
    if(days_elapsed_days == 0){
        you_are.innerHTML = " " + days_elapsed_week + " weeks ";
    }
    else if(days_elapsed_week == 0){
        you_are.innerHTML = " " + days_elapsed_days + " days ";
    }
    else{
        you_are.innerHTML = " " + days_elapsed_week + " weeks and " + days_elapsed_days + " days ";
    }

    if(days_elapsed_week <= 0 && days_elapsed_days <= 0){
        var dd_text = document.getElementById('dd-text');
        var you_are_container = document.getElementById('you-are-container');
        dd_text.textContent = " Your due date would be ";
        c_due_date.textContent = due_date_f;
        var greet = document.getElementById('greet');
        greet.style.visibility = 'hidden';
        you_are_container.style.display = 'none';
        // you_are.innerHTML = " in the process of getting ";
    }else{
        var you_are_container = document.getElementById('you-are-container');
        you_are_container.style.display = 'block';
        var greet = document.getElementById('greet');
        greet.style.visibility = 'visible';
        var dd_text = document.getElementById('dd-text');
        dd_text.textContent = " Your due date is ";
    }


    progress_percentage = days_elapsed * 100 / 280;
    progress_percentage = Math.round(progress_percentage);


    if (progress_percentage > 85) {
        progress_percentage -= 3;
    }
    var w = screen.width;
    if(w < 600){
        if (progress_percentage > 85) {
            progress_percentage -= 3;
        }
    }

    console.log(progress_percentage);

    var i = 0;
    var width = -1;
    var id = setInterval(frame, 80);
    
    var pg_icon = document.getElementById('pg-icon');
    
    function frame() {
        if (progress_percentage <= 0){
            pgbar.style.width = 0 + "%";
            pg_icon.style.left = -1 + "%";
            clearInterval(id);
        }
        if (width >= progress_percentage) {
            clearInterval(id);
            i = 0
        }
        else {
            width++;
            pgbar.style.width = width + "%";
            if(w < 600 ){
                pg_icon.style.left = width-5 + "%";
            }else{
                pg_icon.style.left = width-2 + "%";
            }
        }

    }

    var datesInterval = setInterval(setDates,1000);

    function setDates(){
        var ftd = document.getElementById('f-t-date');
        var std = document.getElementById('s-t-date');
        var ttd = document.getElementById('t-t-date');
        // var due_date = document.getElementById('c-due-date');
        ftd.style.transform = 'translateX(0)';
        ftd.innerHTML = "1st Trimester <br> Ends at " + first_trimester.getDate() + ", " + (month_name(new Date(first_trimester)));
        std.style.transform = 'translateX(0)';
        std.innerHTML = "2nd Trimester <br> Ends at " + second_trimester.getDate() + ", " + (month_name(new Date(second_trimester)));
        ttd.style.transform = 'translateX(0)';
        ttd.innerHTML = "3rd Trimester <br> Ends at " + third_trimester.getDate() + ", " + (month_name(new Date(third_trimester)));
        // due_date.style.transform = 'translateX(0)';
        clearInterval(datesInterval);
    }

}

function calculate_ivf_date() {
    // alert('calcluating.........');
    // console.log(event.target);
    window.scrollTo(0,0);

    var ftd = document.getElementById('f-t-date');
    var std = document.getElementById('s-t-date');
    var ttd = document.getElementById('t-t-date');
    // var due_date = document.getElementById('c-due-date');
    ftd.style.transform = 'translateX(5000px)';
    std.style.transform = 'translateX(5000px)';
    ttd.style.transform = 'translateX(5000px)';
    // due_date.style.transform = 'translateX(5000px)';

    var lpdate = document.getElementById('date-input3').value;

    var lp_date = new Date(lpdate);

    var ivf1 = document.getElementById('customRadio1');
    var ivf2 = document.getElementById('customRadio2');

    console.log(ivf1.checked);
    console.log(ivf2.checked);

    var ivfdays = 3;

    if(ivf1.checked){
        var ivfdays = 3;
    }else if(ivf2.checked){
        var ivfdays = 5;
    }

    var month_name = function (dt) {
        mlist = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return mlist[dt.getMonth()];
    };

    var days_to_sub = parseInt(ivfdays);

    due_date_uf = lp_date.addDays(266-days_to_sub);

    console.log(month_name(new Date(due_date_uf)));

    due_date_f = (month_name(new Date(due_date_uf))) + ' ' + due_date_uf.getDate() + ',  ' + due_date_uf.getFullYear();

    console.log("Due Date is: " + due_date_f);


    var result_box = document.getElementById('result');
    var c_due_date = document.getElementById('c-due-date');

    result_box.style.display = 'block';
    c_due_date.innerHTML = due_date_f;

    var c_due_date_month = document.getElementById('c-due-date-month');
    var c_due_date_day = document.getElementById('c-due-date-day');
    var c_due_date_year = document.getElementById('c-due-date-year');

    c_due_date_month.textContent = month_name(new Date(due_date_uf));
    c_due_date_day.textContent = due_date_uf.getDate();
    c_due_date_year.textContent = due_date_uf.getFullYear();

    var first_trimester = lp_date.addDays(76 - days_to_sub);
    var second_trimester = lp_date.addDays(174 - days_to_sub);
    var third_trimester = lp_date.addDays(266 - days_to_sub);

    console.log(first_trimester);
    console.log(second_trimester);
    console.log(third_trimester);

    var pgbar = document.getElementById('progress-bar');

    cur_date = new Date();
    var diffrence_time = due_date_uf.getTime() - cur_date.getTime();
    // console.log(cur_date);
    // console.log(diffrence_time);
    var diffrence_date = diffrence_time / (1000 * 3600 * 24);
    diffrence_date = Math.round(diffrence_date);
    console.log("Days Left : " + diffrence_date);
    var days_elapsed = 280 - diffrence_date;
    console.log("Days Elapsed : " + days_elapsed);

    var days_elapsed_week = parseInt(days_elapsed / 7);
    var days_elapsed_days = parseInt(days_elapsed % 7) - 1;

    console.log("You are : " + days_elapsed_week + " weeks pregnant.");
    console.log("You are : " + days_elapsed_days + " days pregnant.");

    var you_are = document.getElementById('you-are');
    if(days_elapsed_days == 0){
        you_are.innerHTML = " " + days_elapsed_week + " weeks ";
    }
    else if(days_elapsed_week == 0){
        you_are.innerHTML = " " + days_elapsed_days + " days ";
    }
    else{
        you_are.innerHTML = " " + days_elapsed_week + " weeks and " + days_elapsed_days + " days ";
    }

    if(days_elapsed_week <= 0 && days_elapsed_days <= 0){
        var dd_text = document.getElementById('dd-text');
        var you_are_container = document.getElementById('you-are-container');
        dd_text.textContent = " Your due date would be ";
        c_due_date.textContent = due_date_f;
        var greet = document.getElementById('greet');
        greet.style.visibility = 'hidden';
        you_are_container.style.display = 'none';
        // you_are.innerHTML = " in the process of getting ";
    }else{
        var you_are_container = document.getElementById('you-are-container');
        you_are_container.style.display = 'block';
        var greet = document.getElementById('greet');
        greet.style.visibility = 'visible';
        var dd_text = document.getElementById('dd-text');
        dd_text.textContent = " Your due date is ";
    }

    progress_percentage = days_elapsed * 100 / 280;
    progress_percentage = Math.round(progress_percentage);


    if (progress_percentage > 85) {
        progress_percentage -= 3;
    }
    var w = screen.width;
    if(w < 600){
        if (progress_percentage > 85) {
            progress_percentage -= 3;
        }
    }

    console.log(progress_percentage);

    var i = 0;
    var width = -1;
    var id = setInterval(frame, 80);
    
    var pg_icon = document.getElementById('pg-icon');
    
    function frame() {
        if (progress_percentage <= 0){
            pgbar.style.width = 0 + "%";
            pg_icon.style.left = -1 + "%";
            clearInterval(id);
        }
        if (width >= progress_percentage) {
            clearInterval(id);
            i = 0
        }
        else {
            width++;
            pgbar.style.width = width + "%";
            if(w < 600 ){
                pg_icon.style.left = width-5 + "%";
            }else{
                pg_icon.style.left = width-2 + "%";
            }
        }

    }

    var datesInterval = setInterval(setDates,1000);

    function setDates(){
        var ftd = document.getElementById('f-t-date');
        var std = document.getElementById('s-t-date');
        var ttd = document.getElementById('t-t-date');
        // var due_date = document.getElementById('c-due-date');
        ftd.style.transform = 'translateX(0)';
        ftd.innerHTML = "1st Trimester <br> Ends at " + first_trimester.getDate() + ", " + (month_name(new Date(first_trimester)));
        std.style.transform = 'translateX(0)';
        std.innerHTML = "2nd Trimester <br> Ends at " + second_trimester.getDate() + ", " + (month_name(new Date(second_trimester)));
        ttd.style.transform = 'translateX(0)';
        ttd.innerHTML = "3rd Trimester <br> Ends at " + third_trimester.getDate() + ", " + (month_name(new Date(third_trimester)));
        // due_date.style.transform = 'translateX(0)';
        clearInterval(datesInterval);
    }

}

$(document).on('keydown', function (event) {
    if (event.key == "Escape") {
        $('#result').css('display', 'none');
    }
});


$('#ddtype').on('change',function(){
    var type = $('#ddtype').val();
    var lp = document.getElementById('last_peroid_form');
    var cd = document.getElementById('conception_date_form');
    var ivf = document.getElementById('ivf_form');
    var us = document.getElementById('ultrasound_form');
    if(type == 'last_period'){
        lp.style.display = 'block';
        cd.style.display = 'none';
        ivf.style.display = 'none';
        us.style.display = 'none';
    }
    if(type == 'conception_date'){
        lp.style.display = 'none';
        cd.style.display = 'block';
        ivf.style.display = 'none';
        us.style.display = 'none';
    }
    if(type == 'ivf'){
        lp.style.display = 'none';
        cd.style.display = 'none';
        ivf.style.display = 'block';
        us.style.display = 'none';
    }
    if(type == 'ultrasound'){
        lp.style.display = 'none';
        cd.style.display = 'none';
        ivf.style.display = 'none';
        us.style.display = 'block';
    }
});
