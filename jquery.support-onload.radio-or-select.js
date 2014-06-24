/*
 * jQuery.support-onload.radio-or-select
 * 
 * Copyright (c) 2014 2stars
 * 
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 59 Temple
 * Place, Suite 330, Boston, MA 02111-1307 USA
 * 
 */

/**
 * @example
 * 
 * $(function(){
 *     exhref("#hoge");
 * });
 *
 */


$(function(){
    $(selector).bind("change", function(){
        var chk = $(this).filter(":checked").val(); // input:radio
//      var chk = $(this, "option:selected").val(); // select
        if(typeof chk == 'undefined'){ return; }

        chk = parseInt(chk);  // convert to integer

        ....
        ....

        // point
        // 'chk' value inspect all patterns.

        // example 1
        if(chk == 1) $(selector_1).prop("disabled", false);
        if(chk == 2) $(selector_1).prop("disabled", true);

        // example 2
        if(jQuery.inArray(chk, [1,2]) > -1) $(selector_1).css('display', '');
        if(jQuery.inArray(chk, [3,4]) > -1) $(selector_1).css('display', 'none');

    }).change();
});

