initSidebarItems({"keyword":[["SelfTy","The implementing type within a `trait` or `impl` block, or the current type within a type definition."],["as","Cast between types, or rename an import."],["async","Return a `Future` instead of blocking the current thread."],["await","Suspend execution until the result of a `Future` is ready."],["break","Exit early from a loop."],["const","Compile-time constants and compile-time evaluable functions."],["continue","Skip to the next iteration of a loop."],["crate","A Rust binary or library."],["dyn","`dyn` is a prefix of a trait object’s type."],["else","What expression to evaluate when an `if` condition evaluates to `false`."],["enum","A type that can be any one of several variants."],["extern","Link to or import external code."],["false","A value of type [`bool`] representing logical false."],["fn","A function or function pointer."],["for","Iteration with `in`, trait implementation with `impl`, or higher-ranked trait bounds (`for<'a>`)."],["if","Evaluate a block if a condition holds."],["impl","Implement some functionality for a type."],["in","Iterate over a series of values with `for`."],["let","Bind a value to a variable."],["loop","Loop indefinitely."],["match","Control flow based on pattern matching."],["mod","Organize code into modules."],["move","Capture a closure’s environment by value."],["mut","A mutable variable, reference, or pointer."],["pub","Make an item visible to others."],["ref","Bind by reference during pattern matching."],["return","Return a value from a function."],["self","The receiver of a method, or the current module."],["static","A static item is a value which is valid for the entire duration of your program (a `'static` lifetime)."],["struct","A type that is composed of other types."],["super","The parent of the current module."],["trait","A common interface for a group of types."],["true","A value of type [`bool`] representing logical true."],["type","Define an alias for an existing type."],["union","The Rust equivalent of a C-style union."],["unsafe","Code or interfaces whose memory safety cannot be verified by the type system."],["use","Import or rename items from other crates or modules."],["where","Add constraints that must be upheld to use an item."],["while","Loop while a condition is upheld."]],"macro":[["asm","Inline assembly."],["assert","Asserts that a boolean expression is `true` at runtime."],["assert_eq","Asserts that two expressions are equal to each other (using [`PartialEq`])."],["assert_ne","Asserts that two expressions are not equal to each other (using [`PartialEq`])."],["cfg","Evaluates boolean combinations of configuration flags at compile-time."],["column","Expands to the column number at which it was invoked."],["compile_error","Causes compilation to fail with the given error message when encountered."],["concat","Concatenates literals into a static string slice."],["concat_idents","Concatenates identifiers into one identifier."],["dbg","Prints and returns the value of a given expression for quick and dirty debugging."],["debug_assert","Asserts that a boolean expression is `true` at runtime."],["debug_assert_eq","Asserts that two expressions are equal to each other."],["debug_assert_ne","Asserts that two expressions are not equal to each other."],["env","Inspects an environment variable at compile time."],["eprint","Prints to the standard error."],["eprintln","Prints to the standard error, with a newline."],["file","Expands to the file name in which it was invoked."],["format","Creates a `String` using interpolation of runtime expressions."],["format_args","Constructs parameters for the other string-formatting macros."],["format_args_nl","Same as `format_args`, but adds a newline in the end."],["global_asm","Module-level inline assembly."],["include","Parses a file as an expression or an item according to the context."],["include_bytes","Includes a file as a reference to a byte array."],["include_str","Includes a UTF-8 encoded file as a string."],["is_aarch64_feature_detected","Prevents compilation if `is_aarch64_feature_detected` is used somewhere else than `aarch64` targets."],["is_arm_feature_detected","Prevents compilation if `is_arm_feature_detected` is used somewhere else than `ARM` targets."],["is_mips64_feature_detected","Prevents compilation if `is_mips64_feature_detected` is used somewhere else than `MIPS64` targets."],["is_mips_feature_detected","Prevents compilation if `is_mips_feature_detected` is used somewhere else than `MIPS` targets."],["is_powerpc64_feature_detected","Prevents compilation if `is_powerpc64_feature_detected` is used somewhere else than `PowerPC64` targets."],["is_powerpc_feature_detected","Prevents compilation if `is_powerpc_feature_detected` is used somewhere else than `PowerPC` targets."],["is_x86_feature_detected","A macro to test at runtime whether a CPU feature is available on x86/x86-64 platforms."],["line","Expands to the line number on which it was invoked."],["llvm_asm","LLVM-style inline assembly."],["log_syntax","Prints passed tokens into the standard output."],["matches","Returns whether the given expression matches any of the given patterns."],["module_path","Expands to a string that represents the current module path."],["option_env","Optionally inspects an environment variable at compile time."],["panic","Panics the current thread."],["print","Prints to the standard output."],["println","Prints to the standard output, with a newline."],["stringify","Stringifies its arguments."],["thread_local","Declare a new thread local storage key of type `std::thread::LocalKey`."],["todo","Indicates unfinished code."],["trace_macros","Enables or disables tracing functionality used for debugging other macros."],["try","Unwraps a result or propagates its error."],["unimplemented","Indicates unimplemented code by panicking with a message of “not implemented”."],["unreachable","Indicates unreachable code."],["vec","Creates a `Vec` containing the arguments."],["write","Writes formatted data into a buffer."],["writeln","Write formatted data into a buffer, with a newline appended."]],"mod":[["alloc","Memory allocation APIs."],["any","This module implements the `Any` trait, which enables dynamic typing of any `'static` type through runtime reflection."],["array","Implementations of things like `Eq` for fixed-length arrays up to a certain length. Eventually, we should be able to generalize to all lengths."],["ascii","Operations on ASCII strings and characters."],["backtrace","Support for capturing a stack backtrace of an OS thread"],["borrow","A module for working with borrowed data."],["boxed","A pointer type for heap allocation."],["cell","Shareable mutable containers."],["char","A character type."],["clone","The `Clone` trait for types that cannot be ‘implicitly copied’."],["cmp","Functionality for ordering and comparison."],["collections","Collection types."],["convert","Traits for conversions between types."],["default","The `Default` trait for types which may have meaningful default values."],["env","Inspection and manipulation of the process’s environment."],["error","Traits for working with Errors."],["f32","Constants specific to the `f32` single-precision floating point type."],["f64","Constants specific to the `f64` double-precision floating point type."],["ffi","Utilities related to FFI bindings."],["fmt","Utilities for formatting and printing `String`s."],["fs","Filesystem manipulation operations."],["future","Asynchronous values."],["hash","Generic hashing support."],["hint","Hints to compiler that affects how code should be emitted or optimized. Hints may be compile time or runtime."],["i128","Constants for the 128-bit signed integer type."],["i16","Constants for the 16-bit signed integer type."],["i32","Constants for the 32-bit signed integer type."],["i64","Constants for the 64-bit signed integer type."],["i8","Constants for the 8-bit signed integer type."],["intrinsics","Compiler intrinsics."],["io","Traits, helpers, and type definitions for core I/O functionality."],["isize","Constants for the pointer-sized signed integer type."],["iter","Composable external iteration."],["lazy","Lazy values and one-time initialization of static data."],["marker","Primitive traits and types representing basic properties of types."],["mem","Basic functions for dealing with memory."],["net","Networking primitives for TCP/UDP communication."],["num","Additional functionality for numerics."],["ops","Overloadable operators."],["option","Optional values."],["os","OS-specific functionality."],["panic","Panic support in the standard library."],["path","Cross-platform path manipulation."],["pin","Types that pin data to its location in memory."],["prelude","The Rust Prelude"],["primitive","This module reexports the primitive types to allow usage that is not possibly shadowed by other declared types."],["process","A module for working with processes."],["ptr","Manually manage memory through raw pointers."],["raw","Contains struct definitions for the layout of compiler built-in types."],["rc","Single-threaded reference-counting pointers. ‘Rc’ stands for ‘Reference Counted’."],["result","Error handling with the `Result` type."],["slice","A dynamically-sized view into a contiguous sequence, `[T]`."],["str","Unicode string slices."],["stream","Composable asynchronous iteration."],["string","A UTF-8–encoded, growable string."],["sync","Useful synchronization primitives."],["task","Types and Traits for working with asynchronous tasks."],["thread","Native threads."],["time","Temporal quantification."],["u128","Constants for the 128-bit unsigned integer type."],["u16","Constants for the 16-bit unsigned integer type."],["u32","Constants for the 32-bit unsigned integer type."],["u64","Constants for the 64-bit unsigned integer type."],["u8","Constants for the 8-bit unsigned integer type."],["usize","Constants for the pointer-sized unsigned integer type."],["vec","A contiguous growable array type with heap-allocated contents, written `Vec<T>`."]],"primitive":[["array","A fixed-size array, denoted `[T; N]`, for the element type, `T`, and the non-negative compile-time constant size, `N`."],["bool","The boolean type."],["char","A character type."],["f32","A 32-bit floating point type (specifically, the “binary32” type defined in IEEE 754-2008)."],["f64","A 64-bit floating point type (specifically, the “binary64” type defined in IEEE 754-2008)."],["fn","Function pointers, like `fn(usize) -> bool`."],["i128","The 128-bit signed integer type."],["i16","The 16-bit signed integer type."],["i32","The 32-bit signed integer type."],["i64","The 64-bit signed integer type."],["i8","The 8-bit signed integer type."],["isize","The pointer-sized signed integer type."],["never","The `!` type, also called “never”."],["pointer","Raw, unsafe pointers, `*const T`, and `*mut T`."],["reference","References, both shared and mutable."],["slice","A dynamically-sized view into a contiguous sequence, `[T]`. Contiguous here means that elements are laid out so that every element is the same distance from its neighbors."],["str","String slices."],["tuple","A finite heterogeneous sequence, `(T, U, ..)`."],["u128","The 128-bit unsigned integer type."],["u16","The 16-bit unsigned integer type."],["u32","The 32-bit unsigned integer type."],["u64","The 64-bit unsigned integer type."],["u8","The 8-bit unsigned integer type."],["unit","The `()` type, also called “unit”."],["usize","The pointer-sized unsigned integer type."]]});