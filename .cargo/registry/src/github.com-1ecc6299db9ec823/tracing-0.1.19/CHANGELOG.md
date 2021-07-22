# 0.1.19 (August 10, 2020)

### Fixed

- Updated `tracing-core` to fix incorrect calculation of the global max level
  filter (#908)

### Added

- **attributes**: Support for using `self` in field expressions when
  instrumenting `async-trait` functions (#875)
- Several documentation improvements (#832, #881, #896, #897, #911, #913)

Thanks to @anton-dutov, @nightmared, @mystor, and @toshokan for contributing to
this release!
  
# 0.1.19 (July 31, 2020)

### Fixed

- Fixed a bug where `LevelFilter::OFF` (and thus also the `static_max_level_off`
  feature flag) would enable *all* traces, rather than *none* (#853)
- **log**: Fixed `tracing` macros and `Span`s not checking `log::max_level`
  before emitting `log` records (#870)
  
### Changed

- **macros**: Macros now check the global max level (`LevelFilter::current`)
  before the per-callsite cache when determining if a span or event is enabled.
  This significantly improves performance in some use cases (#853)
- **macros**: Simplified the code generated by macro expansion significantly,
  which may improve compile times and/or `rustc` optimizatation of surrounding
  code (#869, #869)
- **macros**: Macros now check the static max level before checking any runtime
  filtering, improving performance when a span or event is disabled by a
  `static_max_level_XXX` feature flag (#868) 
- `LevelFilter` is now a re-export of the `tracing_core::LevelFilter` type, it
  can now be used interchangably with the versions in `tracing-core` and
  `tracing-subscriber` (#853)
- Significant performance improvements when comparing `LevelFilter`s and
  `Level`s (#853)
- Updated the minimum `tracing-core` dependency to 0.1.12 (#853)

### Added

- **macros**: Quoted string literals may now be used as field names, to allow
  fields whose names are not valid Rust identifiers (#790)
- **docs**: Several documentation improvements (#850, #857, #841)
- `LevelFilter::current()` function, which returns the highest level that any
  subscriber will enable (#853)
- `Subscriber::max_level_hint` optional trait method, for setting the value
  returned by `LevelFilter::current()` (#853)
  
Thanks to new contributors @cuviper, @ethanboxx, @ben0x539, @dignati,
@colelawrence, and @rbtcollins for helping out with this release!

# 0.1.17 (July 22, 2020)

### Changed

- **log**: Moved verbose span enter/exit log records to "tracing::span::active"
  target, allowing them to be filtered separately (#833)
- **log**: All span lifecycle log records without fields now have the `Trace`
  log filter, to guard against `log` users enabling them by default with blanket
  level filtering (#833)
  
### Fixed

- **log**/**macros**: Fixed missing implicit imports of the
  `tracing::field::debug` and `tracing::field::display` functions inside the
  macros when the "log" feature is enabled (#835)

# 0.1.16 (July 8, 2020)

### Added

- **attributes**: Support for arbitrary expressions as fields in `#[instrument]` (#672)
- **attributes**: `#[instrument]` now emits a compiler warning when ignoring unrecognized
  input (#672, #786)
- Improved documentation on using `tracing` in async code (#769)

### Changed

- Updated `tracing-core` dependency to 0.1.11

### Fixed

- **macros**: Excessive monomorphization in macros, which could lead to
  longer compilation times (#787) 
- **log**: Compiler warnings in macros when `log` or `log-always` features
  are enabled (#753)
- Compiler error when `tracing-core/std` feature is enabled but `tracing/std` is
  not (#760)

Thanks to @nagisa for contributing to this release!

# 0.1.15 (June 2, 2020)

### Changed

- **macros**: Replaced use of legacy `local_inner_macros` with `$crate::` (#740)

### Added

- Docs fixes and improvements (#742, #731, #730)

Thanks to @bnjjj, @blaenk, and @LukeMathWalker for contributing to this release!

# 0.1.14 (May 14, 2020)

### Added

- **log**: When using the [`log`] compatibility feature alongside a `tracing`
  `Subscriber`, log records for spans now include span IDs (#613)
- **attributes**: Support for using `#[instrument]` on methods that are part of
  [`async-trait`] trait implementations (#711)
- **attributes**: Optional `#[instrument(err)]` argument to automatically emit
  an event if an instrumented function returns `Err` (#637) 
- Added `#[must_use]` attribute to the guard returned by
  `subscriber::set_default` (#685)
  
### Changed

- **log**: Made [`log`] records emitted by spans much less noisy when span IDs are
 not available (#613)
 
### Fixed

- Several typos in the documentation (#656, #710, #715)

Thanks to @FintanH, @shepmaster, @inanna-malick, @zekisharif, @bkchr, @majecty,
@ilana and @nightmared for contributing to this release! 

[`async-trait`]: https://crates.io/crates/async-trait 
[`log`]: https://crates.io/crates/log

# 0.1.13 (February 26, 2019)

### Added

- **field**: `field::Empty` type for declaring empty fields whose values will be
  recorded later (#548)
- **field**: `field::Value` implementations for `Wrapping` and `NonZero*`
  numbers (#538)
- **attributes**: Support for adding arbitrary literal fields to spans generated
  by `#[instrument]` (#569)
- **attributes**: `#[instrument]` now emits a helpful compiler error when
  attempting to skip a function parameter (#600)

### Changed

- **attributes**: The `#[instrument]` attribute was placed under an on-by-default
  feature flag "attributes" (#603)

### Fixed

- Broken and unresolvable links in RustDoc (#595)

Thanks to @oli-cosmian and @Kobzol for contributing to this release!

# 0.1.12 (January 11, 2019)

### Added

- `Span::with_subscriber` method to access the subscriber that tracks a `Span`
  (#503)
- API documentation now shows which features are required by feature-flagged
  items (#523)
- Improved README examples (#496)
- Documentation links to related crates (#507)

# 0.1.11 (December 20, 2019)

### Added

- `Span::is_none` method (#475)
- `LevelFilter::into_level` method (#470)
- `LevelFilter::from_level` function and `From<Level>` impl (#471)
- Documented minimum supported Rust version (#482)

### Fixed

- Incorrect parameter type to `Span::follows_from` that made it impossible to
  call (#467)
- Missing whitespace in `log` records generated when enabling the `log` feature
  flag (#484)
- Typos and missing links in documentation (#405, #423, #439)

# 0.1.10 (October 23, 2019)

### Added

- Support for destructuring in arguments to `#[instrument]`ed functions (#397)
- Generated field for `self` parameters when `#[instrument]`ing methods (#397)
- Optional `skip` argument to `#[instrument]` for excluding function parameters
  from generated spans (#359)
- Added `dispatcher::set_default` and `subscriber::set_default` APIs, which
  return a drop guard (#388)

### Fixed

- Some minor documentation errors (#356, #370)

# 0.1.9 (September 13, 2019)

### Fixed

- Fixed `#[instrument]`ed async functions not compiling on `nightly-2019-09-11`
  or newer (#342)

### Changed

- Significantly reduced performance impact of skipped spans and events when a
  `Subscriber` is not in use (#326)
- The `log` feature will now only cause `tracing` spans and events to emit log
  records when a `Subscriber` is not in use (#346)

### Added

- Added support for overriding the name of the span generated by `#[instrument]`
  (#330)
- `log-always` feature flag to emit log records even when a `Subscriber` is set
  (#346)

# 0.1.8 (September 3, 2019)

### Changed

- Reorganized and improved API documentation (#317)

### Removed

- Dev-dependencies on `ansi_term` and `humantime` crates, which were used only
  for examples (#316)

# 0.1.7 (August 30, 2019)

### Changed

- New (curly-brace free) event message syntax to place the message in the first
  field rather than the last (#309)

### Fixed

- Fixed a regression causing macro stack exhaustion when the `log` feature flag
  is enabled (#304)

# 0.1.6 (August 20, 2019)

### Added

- `std::error::Error` as a new primitive type (#277)
- Support for mixing key-value fields and `format_args` messages without curly
  braces as delimiters (#288)

### Changed

- `tracing-core` dependency to 0.1.5 (#294)
- `tracing-attributes` dependency to 0.1.2 (#297)

# 0.1.5 (August 9, 2019)

### Added

- Support for `no-std` + `liballoc` (#263)

### Changed

- Using the `#[instrument]` attribute on `async fn`s no longer requires a
  feature flag (#258)

### Fixed

- The `#[instrument]` macro now works on generic functions (#262)

# 0.1.4 (August 8, 2019)

### Added

- `#[instrument]` attribute for automatically adding spans to functions (#253)

# 0.1.3 (July 11, 2019)

### Added

- Log messages when a subscriber indicates that a span has closed, when the
  `log` feature flag is enabled (#180).

### Changed

- `tracing-core` minimum dependency version to 0.1.2 (#174).

### Fixed

- Fixed an issue where event macro invocations with a single field, using local
  variable shorthand, would recur infinitely (#166).
- Fixed uses of deprecated `tracing-core` APIs (#174).

# 0.1.2 (July 6, 2019)

### Added

- `Span::none()` constructor, which does not require metadata and
  returns a completely empty span (#147).
- `Span::current()` function, returning the current span if it is
  known to the subscriber (#148).

### Fixed

- Broken macro imports when used prefixed with `tracing::` (#152).

# 0.1.1 (July 3, 2019)

### Changed

- `cfg_if` dependency to 0.1.9.

### Fixed

- Compilation errors when the `log` feature is enabled (#131).
- Unclear wording and typos in documentation (#124, #128, #142).

# 0.1.0 (June 27, 2019)

- Initial release