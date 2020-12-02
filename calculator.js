var ar = new Array();

var prev = 0,

    now,

    index;

for (var i = 0; i < s.length - k + 1; ++i) {

    ar[i] = s.substr(i, k)

    now = vowelCount(ar[i], ar[i].length)

    if (now > prev) {

        prev = now

        index = i;

    }

}




















var count = 0,

    i = 0;

while (i < k) {

    if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')

        ++count;

    ++i;

}

return count