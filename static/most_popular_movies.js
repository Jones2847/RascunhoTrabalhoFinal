window.onload = boot;
var oTextSearchExp, oBtnSearch, oSectionSearchFeedback;
var inputQuery = document.getElementById("query_google");
var formSearch = document.getElementById("id_form_search");
function boot(){
   

    relevant = [inputQuery]

    for (r of relevant){
        if (r==null){
            window.alert("Relevant object not available. Aborting.");
            return;
        }
    }//for
    alert("All relevant objects available. Proceeding.");

    formSearch.onsubmit = go_search();
}//boot

function go_search(){
    var search_for_this = inputQuery.value;
    var search_with_google = "https://www.google.com/search?q="+search_for_this
    document.location.href = "search_with_google";
}

