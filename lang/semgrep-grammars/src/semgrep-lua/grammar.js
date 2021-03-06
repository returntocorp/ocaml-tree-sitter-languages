/*
 * semgrep-lua
 *
 * Extend the standard lua grammar with metavariable pattern constructs.
 * There is no need to extend it for ellipsis because ellipsis are already
 * part of the Lua language.
 */

const standard_grammar = require('tree-sitter-lua/grammar');

module.exports = grammar(standard_grammar, {
    name: 'lua',
});
