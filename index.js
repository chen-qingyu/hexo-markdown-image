'use strict';

hexo.extend.filter.register('before_post_render', function (data) {
    data.content = data.content.replace(/!{1}\[([^\[\]]*)\]\((\S*)\s?(?:".*")?\)/g,
        function (match_str, label, path) {
            const parts = path.split('/');
            if (parts.length == 3 && parts[0] == '.') {
                parts.shift();
            }
            if (parts.length == 2) {
                const title = data.content.match(/title\:\s.+/g)[0].replace('title: ', '');
                if (parts[0] == title) {
                    return `![${label}](${parts[1]})`;
                }
            }
            return match_str;
        });

    return data;
});
