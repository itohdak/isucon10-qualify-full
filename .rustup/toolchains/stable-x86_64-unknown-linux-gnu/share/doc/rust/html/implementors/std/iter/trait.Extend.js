(function() {var implementors = {};
implementors["std"] = [{"text":"impl&lt;K, V, S&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"primitive.tuple.html\">(</a>K, V<a class=\"primitive\" href=\"primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"std/collections/hash_map/struct.HashMap.html\" title=\"struct std::collections::hash_map::HashMap\">HashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"std/hash/trait.BuildHasher.html\" title=\"trait std::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["std::collections::hash::map::HashMap"]},{"text":"impl&lt;'a, K, V, S&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"primitive.tuple.html\">(</a><a class=\"primitive\" href=\"primitive.reference.html\">&amp;'a </a>K, <a class=\"primitive\" href=\"primitive.reference.html\">&amp;'a </a>V<a class=\"primitive\" href=\"primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"std/collections/hash_map/struct.HashMap.html\" title=\"struct std::collections::hash_map::HashMap\">HashMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"std/marker/trait.Copy.html\" title=\"trait std::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"std/marker/trait.Copy.html\" title=\"trait std::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"std/hash/trait.BuildHasher.html\" title=\"trait std::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["std::collections::hash::map::HashMap"]},{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"std/collections/hash_set/struct.HashSet.html\" title=\"struct std::collections::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"std/hash/trait.BuildHasher.html\" title=\"trait std::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["std::collections::hash::set::HashSet"]},{"text":"impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"std/collections/hash_set/struct.HashSet.html\" title=\"struct std::collections::hash_set::HashSet\">HashSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"std/cmp/trait.Eq.html\" title=\"trait std::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"std/hash/trait.Hash.html\" title=\"trait std::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"std/marker/trait.Copy.html\" title=\"trait std::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"std/hash/trait.BuildHasher.html\" title=\"trait std::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["std::collections::hash::set::HashSet"]},{"text":"impl <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>","synthetic":false,"types":["std::ffi::os_str::OsString"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;&amp;'a <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>","synthetic":false,"types":["std::ffi::os_str::OsString"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'a, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>","synthetic":false,"types":["std::ffi::os_str::OsString"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt;&gt; <a class=\"trait\" href=\"std/iter/trait.Extend.html\" title=\"trait std::iter::Extend\">Extend</a>&lt;P&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>","synthetic":false,"types":["std::path::PathBuf"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()