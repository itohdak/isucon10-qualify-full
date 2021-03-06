//! Aliases and traits to simplify float-parsing.

use lib::{iter, slice};

use float::*;
use util::*;
use super::bignum::ToBigfloat;
use super::errors::FloatErrors;

pub type SliceIter<'a, T> = slice::Iter<'a, T>;
pub type ChainedSliceIter<'a, T> = iter::Chain<SliceIter<'a, T>, SliceIter<'a, T>>;

// TRAITS

/// Trait to simplify type signatures for atof.
#[cfg(has_i128)]
pub(super) trait FloatType:
    FloatRounding<u64> +
    FloatRounding<u128> +
    StablePower
{
    type Mantissa: Mantissa;
    type ExtendedFloat: ExtendedFloatType<Self>;
}

#[cfg(not(has_i128))]
pub(super) trait FloatType:
    FloatRounding<u64> +
    StablePower
{
    type Mantissa: Mantissa;
    type ExtendedFloat: ExtendedFloatType<Self>;
}

impl FloatType for f32 {
    type Mantissa = Self::Unsigned;
    type ExtendedFloat = ExtendedFloat<Self::Mantissa>;
}

impl FloatType for f64 {
    type Mantissa = Self::Unsigned;
    type ExtendedFloat = ExtendedFloat<Self::Mantissa>;
}

/// Trait for a useable mantissa.
pub(super) trait MantissaType:
    Mantissa +
    FloatErrors
{}

impl MantissaType for u64 {
}

#[cfg(has_i128)]
impl MantissaType for u128 {
}

/// Trait for extended-float types.
pub(super) trait ExtendedFloatType<F: FloatType>:
    ToBigfloat<F::Mantissa> +
    From<F>
{
    // I really wish I had any other choice **other** than getters and setters,
    // but since we can't specify fields in traits, and we can't use properties...
    // C'est la vie.
    fn mant(&self) -> F::Mantissa;
    fn exp(&self) -> i32;
    fn set_mant(&mut self, F::Mantissa);
    fn set_exp(&mut self, i32);
}

impl ExtendedFloatType<f32> for ExtendedFloat<u32> {
    perftools_inline!{
    fn mant(&self) -> u32 {
        self.mant
    }}

    perftools_inline!{
    fn exp(&self) -> i32 {
        self.exp
    }}

    perftools_inline!{
    fn set_mant(&mut self, mant: u32) {
        self.mant = mant;
    }}

    perftools_inline!{
    fn set_exp(&mut self, exp: i32) {
        self.exp = exp;
    }}
}

impl ExtendedFloatType<f64> for ExtendedFloat<u64> {
    perftools_inline!{
    fn mant(&self) -> u64 {
        self.mant
    }}

    perftools_inline!{
    fn exp(&self) -> i32 {
        self.exp
    }}

    perftools_inline!{
    fn set_mant(&mut self, mant: u64) {
        self.mant = mant;
    }}

    perftools_inline!{
    fn set_exp(&mut self, exp: i32) {
        self.exp = exp;
    }}
}
