//! Float format enumerations.

/// Float format for parsing.
///
/// TODO(ahuszagh) These really need to be bit flags...
#[repr(i32)]
#[derive(Debug, Copy, Clone, Eq, PartialEq)]
pub enum FloatFormat {
    /// Standard IEE754, decimal float representation.
    /// Has an optional fraction after the decimal point, with no
    /// digit separators.
    Standard = 0,
    // Fraction component after decimal point is required.
    RequiredFraction = 1,
    //  Need both lazy and strict for the digit separators.
    //      DigitSeparatorChar == _ or '
    // TODO(ahuszagh) Need bitwise flags for the digit separators...
    // TODO(ahuszagh) Need to add variants...


    // Aliases.
    // TODO(ahuszagh) Need both literals and non-literals.
    Json = -1,
}
