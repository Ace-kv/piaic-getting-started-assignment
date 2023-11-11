var make_album = function (artist_name, album_title, tracks_num) {
    if (tracks_num != undefined) {
        return {
            "artist_name": artist_name,
            "album_title": album_title,
            "tracks_num": tracks_num
        };
    }
    else
        return {
            "artist_name": artist_name,
            "album_title": album_title,
        };
};
console.log(make_album("A", "Album A"));
console.log(make_album("B", "Album B"));
console.log(make_album("C", "Album C", 2));
