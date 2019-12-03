<?php
$rss_feed = simplexml_load_file("https://www.theregister.co.uk/software/headlines.atom");
$string = '';

function clean($string) {
    # remove numerics
    $string = preg_replace('/[0-9]+/', '', $string);

    # remove substrings
    $string = str_replace(array("'re", "'s", "'ve", "co-", "'ll", "."), '', $string);
    
    # replace dash with space
    $string = str_replace(array("-"), ' ', $string);
    
    # remove alpha mumerics
    return preg_replace('/[^A-Za-z0-9\-]/', ' ', $string);
}

if (!empty($rss_feed)) {
    foreach ($rss_feed->entry as $feed_item) {
        $string = $string . ' ' . $feed_item->title . ' ' . strip_tags($feed_item->summary);
    }
}

# lower the whole string
$lower_string = strtolower($string);
# clean srings with above function
$clean_string = clean($lower_string);
# array of words
$all_words = explode(' ', $clean_string);
# top 50 popular words
$top_50_words = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "i", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me"];

# exclude top 50 popular words
$subtracted_words = array_diff($all_words,$top_50_words);
# count array by value
$countx = array_count_values($subtracted_words);
# remove any empty key array element
unset($countx['']);
# short array by count
arsort($countx);

if (isset($_SESSION['username'])) {
    echo "Welcome  " . $_SESSION['username'];
    echo '<a href="logout.php"><input type="button" class="btn-logout"
    value="Logout"></a></br>';  

    $i = 0;
    foreach($countx as $key=>$value){
        echo '<span class="words">' . $key . ' (' . $value . ')</span> ';
        $i++;
        if ($i >= 10){
            break;
        }
    }


}
?>
