var TreeNode = require('./TreeNode');
class Tree {
    buildBinaryTree(values) {
        var nodes = [];
        values.forEach(v => {
            if (v!=null)
                nodes.push(new TreeNode(v));
            else
                nodes.push(null);
        });

        var kids = nodes.slice(1);      //prepare a copy of nodes by removing first element which is root.
        var root = nodes[0];       //prepare root and hold it in root variable.
        nodes.forEach(node => {
            if (node) {
                if (kids.length > 0)
                    node.left = kids.shift();
                if (kids.length > 0)
                    node.right = kids.shift();
            }
        });
        return root;
    }

    printTree(root) {
        if (root) {
            console.log(root.val);
            this.printTree(root.left);
            this.printTree(root.right);
        }
    }

    printBinaryTree(root) {
        var response = this.buildTreeString(root, 0);
        var lines = response[0];
        var width = response[1];
        var rootStart = response[2];
        var rootEnd = response[3];
        // lines.forEach(line=> {
        //     line = line.trimRight();
        // });
        //console.log('\n' + '\n' + lines.join('\n'));
        console.log('\n\n');
        var outputTree = '\n\n';
        for(var i in lines){
            outputTree+=lines[i]+'\n';
        }
        console.log(outputTree);
    }

    buildTreeString(root, currIndex) {
        if (root == null)
            return [[], 0, 0, 0];

        var line1 = [];
        var line2 = [];
        var nodeRepr = root.val + '';

        var gapSize = nodeRepr.length;
        var newRootWidth = gapSize;
        var newRootStart, newRootEnd, l_root, r_root;

        //Get the left and right sub-boxes, their widths, and root repr positions
        var respLeft = this.buildTreeString(root.left, 2 * currIndex + 1);
        var l_box = respLeft[0], l_box_width = respLeft[1], l_root_start = respLeft[2], l_root_end = respLeft[3];
        var respRight = this.buildTreeString(root.right, 2 * currIndex + 2);
        var r_box = respRight[0], r_box_width = respRight[1], r_root_start = respRight[2], r_root_end = respRight[3];

        //Draw the branch connecting the current root node to the left sub-box
        //Pad the line with whitespaces where necessary
        if (l_box_width > 0) {
            l_root = Math.floor((l_root_start + l_root_end) / 2) + 1;
            line1.push(this.spaceMult(' ', (l_root + 1)));
            line1.push(this.spaceMult('_', (l_box_width - l_root)));
            line2.push(this.spaceMult(' ',l_root) + '/');
            line2.push(this.spaceMult(' ', (l_box_width - l_root)));
            var newRootStart = l_box_width + 1;
            gapSize += 1;
        } else {
            newRootStart = 0;
        }

        // Draw the representation of the current root node
        line1.push(nodeRepr);
        line2.push(this.spaceMult(' ', newRootWidth));

        // Draw the branch connecting the current root node to the right sub-box
        // Pad the line with whitespaces where necessary
        if (r_box_width > 0) {
            r_root = Math.floor((r_root_start + r_root_end) / 2);
            line1.push(this.spaceMult('_', r_root));
            line1.push(this.spaceMult(' ', (r_box_width - r_root + 1)));
            line2.push(this.spaceMult(' ',r_root) + '\\');
            line2.push(this.spaceMult(' ', (r_box_width - r_root)));
            gapSize += 1;
        }
        newRootEnd = newRootStart + newRootWidth - 1;

        // Combine the left and right sub-boxes with the branches drawn above
        var gap = this.spaceMult(' ', gapSize);

        var newBox = [line1.join(''), line2.join('')];
        for (var i = 0; i < Math.max(l_box.length, r_box.length); i++) {
            var l_line = (i < l_box.length) ? l_box[i] : this.spaceMult(' ', l_box_width);
            var r_line = (i < r_box.length) ? r_box[i] : this.spaceMult(' ', r_box_width);
            newBox.push(l_line + gap + r_line);
        }

        // Return the new box, its width and its root repr positions
        return [newBox, newBox[0].length, newRootStart, newRootEnd];
    }

    spaceMult(char, width) {
        var i = 0;
        var ans = '';
        while (i < width) {
            ans += char;
            i++;
        }
        return ans;
    }

    prettyPrint(root) {
        var _printNodes = function (levels) {
            for (var i = 0; i < levels.length; i++) {
                var spacerSize = Math.ceil(40 / ((i + 2) * 2));
                var spacer = (new Array(spacerSize + 1).join('  '));
                var lines = levels[i].map(function (val, index) {
                    return (index % 2 === 0) ? ' /' : '\\ ';
                });
                levels[i].unshift('');
                lines.unshift('');
                if (i > 0) {
                    console.log(lines.join(spacer));
                }
                console.log(levels[i].join(spacer));
            }
        };

        var _extractNodes = function (node, depth, levels) {
            //traverse left branch
            if (node.left) {
                levels = _extractNodes(node.left, depth + 1, levels);
            }

            levels[depth] = levels[depth] || [];
            levels[depth].push(node.val);

            //traverse right branch
            if (node.right) {
                levels = _extractNodes(node.right, depth + 1, levels);
            }

            return levels;
        };

        // var _prettyPrintNode = function(node, depth) {
        //     //traverse left branch
        //     if(!!node.left) {
        //         _prettyPrintNode(node.left, depth + 1);
        //     }

        //     //print this node
        //     var indent = '';
        //     // if (depth > 0) indent = '|';
        //     indent += (new Array(depth+1).join('  ')); //hack to get [depth] number of spaces
        //     // if (depth > 0) {
        //     //     indent += '|-';
        //     // }
        //     console.log(indent + node.value );

        //     //traverse right branch
        //     if(!!node.right) {
        //         _prettyPrintNode(node.right, depth + 1);
        //     }
        // };

        // _prettyPrintNode(this._root, 0);
        var levels = _extractNodes(root, 0, []);
        console.log("Levels below");
        console.log(levels);
        _printNodes(levels);
    }

    // def build_binary_tree(values):
    //     nodes = [None if v is None else TreeNode(v) for v in values]

    //     kids = nodes[::-1]
    //     root = kids.pop()
    //     for node in nodes:
    //         if node:
    //             if kids: node.left  = kids.pop()
    //             if kids: node.right = kids.pop()
    //     return root
}
module.exports = Tree;

