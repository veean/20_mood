<script>
  var a = document.getElementsById("quotes_json")
  var b = JSON.parse(a.text)
  var rand_index = Math.round
</script>

$( document.body ).ready(function() {
    jQuery.getJSON('static/json/quotes.json', success=function(json) {
        var quote = parseInt(Math.random() * json.quotes.length);
        $('#joke').prepend(json.quotes[quote].phrase);
        $('#signature').text(json.quotes[quote].signature);
    })
});