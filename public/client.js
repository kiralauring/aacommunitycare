// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  // this is working, so that's good :)
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $("form[action='/dreams']").submit(function(event) {
    event.preventDefault();
    var dream = $('#dreamsInput').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      // The line above this is adding the text for the newly added "dream" to the list
      // Below, we're setting the value of the dreamsInput to be empty (so it looks like it saved and clears out the old value)
      $("#dreamsInput").val('');
      $("#dreamsInput").focus();
    });
    
  });
  
  $.get('/accountability', function(accountabilities) {
    accountabilities.forEach(function(acc) {
      $('<li></li>').text(acc).appendTo('ul#accountability');
    });
  });
  //ahh i see. no yoou are like saving my life. I really bit off more than I could chew here clearly!! :)
  //sounds great!!
  $("form[action='/accountability']").submit(function(event) {
    event.preventDefault();
    var accountability = $('#accountabilityInput').val();
    $.post('/accountability?' + $.param({accountability: accountability}), function() {
      $('<li></li>').text(accountability).appendTo('ul#accountability');
      $("#accountabilityInput").val('');
      $("#accountabilityInput").focus();
    });
  });
    // this is the part that shows the already submitted goods as the list items in HTML
    $.get('/good', function(goodthings) {
    goodthings.forEach(function(good) {
      $('<li></li>').text(good).appendTo('ul#good');
    });
  });
  
  //good form for handling submitting new "good" inputs
  $("form[action='/good']").submit(function(event) {
    event.preventDefault();
    var good = $('#goodInput').val();
    $.post('/good?' + $.param({good: good}), function() {
      $('<li></li>').text(good).appendTo('ul#good');
      $('#goodInput').val('');
      $('#goodInput').focus();
    });
  });
  
   $.get('/quest', function(questions) {
    questions.forEach(function(quest) {
      $('<li></li>').text(quest).appendTo('ul#quest');
    });
  });
  
  //quest form for handling submitting new "quest" inputs
  $("form[action='/quest']").submit(function(event) {
    event.preventDefault();
    var quest = $('#questInput').val();
    $.post('/quest?' + $.param({quest: quest}), function() {
      $('<li></li>').text(quest).appendTo('ul#quest');
      $('#questInput').val('');
      $('#questInput').focus();
    });
  });
  
  $.get('/value', function(values) {
    values.forEach(function(value) {
      $('<li></li>').text(value).appendTo('ul#value');
    });
  });
  
  //value form for handling submitting new "value" inputs
  $("form[action='/value']").submit(function(event) {
    event.preventDefault();
    var value = $('#valueInput').val();
    $.post('/value?' + $.param({value: value}), function() {
      $('<li></li>').text(value).appendTo('ul#value');
      $('#valueInput').val('');
      $('#valueInput').focus();
    });
  });
  
  $.get('/advice', function(advices) {
    advices.forEach(function(advice) {
      $('<li></li>').text(advice).appendTo('ul#advice');
    });
  });
  
  //value form for handling submitting new "value" inputs
  $("form[action='/advice']").submit(function(event) {
    event.preventDefault();
    var advice = $('#adviceInput').val();
    $.post('/advice?' + $.param({advice: advice}), function() {
      $('<li></li>').text(advice).appendTo('ul#advice');
      $('#adviceInput').val('');
      $('#adviceInput').focus();
    });
  });
  
});