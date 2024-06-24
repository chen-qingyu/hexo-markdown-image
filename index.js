'use strict';

hexo.extend.filter.register('before_post_render', function (data) {
    // ![label](folder/filename.png) -> ![label](filename.png)
    data.content = data.content.replace(/!{1}\[([^\[\]]*)\]\((\S*)\s?(?:".*")?\)/g,
        function (match_str, label, path) {
            let parts = path.split('/');
            if (parts.length == 2) {
                let title = content.match(/title\:\s.+/g)[0].replace('title: ', '');
                if (parts[0] == title) {
                        return `![${label}](${parts[1]})`;
                    }
                return match_str;
            } else {
                console.error(`unresolved image path: ${path}`);
                return match_str;
            }
        });

    return data;
});
