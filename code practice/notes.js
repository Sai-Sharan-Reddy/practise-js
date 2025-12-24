//  Here’s the general conversion order:
 
// If same type → compare directly (no conversion)

// If one is null and other is undefined → true

// If one is number and other is string → convert string → number

// If one is boolean → convert boolean → number

// If one is object and other is string / number / symbol / bigint → convert object → primitive (valueOf → toString)


// -------------- NPM vs NPX --------------

// npm (Node Package Manager)

// - npm is used to install, manage, and share packages (libraries or tools) from the npm registry.

// - It downloads the package to your local node_modules folder and adds it to your package.json if specified.

// npx (Node Package eXecute)

// - npx is a package runner that comes with npm (version 5.2+).

// - It allows you to run packages without installing them globally.

// - It temporarily installs the package (if not already installed), executes it, and then removes it.



// -------------- Frontend Developer Interview Topics --------------
// 1️⃣ JavaScript Fundamentals (Must-Know)
// Core Language

// var vs let vs const

// Hoisting (functions vs variables)

// Scope
// -Global
// -Function
// -Block

// Strict mode ('use strict')

// Temporal Dead Zone (TDZ)

//----------------------- Data Types

// Primitive vs Non-primitive

// typeof quirks (typeof null)

// NaN

// undefined vs null

// Symbol

// BigInt

// ------------------ Type Coercion

// Implicit vs explicit coercion

// Truthy / Falsy values

// == vs ===

// Object to primitive conversion

// [] == [], {} comparisons

// ------------------Operators

// + unary operator

// Logical operators (&&, ||, ??)

// Optional chaining (?.)

// Spread (...)

// Rest parameters

// 2️⃣ Functions & Execution Model
// --------------- Functions

// Function declaration vs expression

// Arrow functions

// IIFE

// Higher Order Functions

// Pure vs impure functions

// ----------- this Keyword

// Global context

// Function context

// Arrow functions

// call, apply, bind

// new keyword behavior

// ---------------Closures

// Definition & examples

// Real-world use cases

// Data hiding

// Currying

// Memoization

// Event handlers

// ---------------------Execution Context

// Call stack

// Lexical environment

// Scope chain

// 3️⃣ Asynchronous JavaScript (Very Important)
//--------------- Event Loop

// Call stack

// Web APIs

// Callback queue

// Microtask queue

// Priority of microtasks

// ----------------------Promises

// Promise states

// .then(), .catch(), .finally()

// Promise chaining

// Promise.all

// Promise.race

// Promise.any

// Promise.allSettled

// ------------------Async / Await

// How it works internally

// Error handling

// Sequential vs parallel execution

// ---------------Timers

// setTimeout

// setInterval

// requestAnimationFrame

// 4️⃣ Objects, Prototypes & Classes
//-------------------- Objects

// Object creation patterns

// Shallow vs deep copy

// Object.freeze, seal

// Property descriptors

//------------------- Prototypes

// Prototype chain

// __proto__ vs prototype

// Inheritance before ES6

//-------------------------------  Classes (ES6)

// Constructors

// Inheritance

// super

// Private fields

// Static methods

// 5️⃣ Arrays & Data Handling
// ----------------------------Array Methods

// map, filter, reduce

// forEach vs map

// some, every

// find, findIndex

// slice vs splice

// flat, flatMap

// --------------------------Immutability

// Why immutability matters

// Updating arrays & objects immutably

// 6️⃣ Browser & Web APIs
//------------------------------ DOM

// DOM tree

// Querying elements

// Event bubbling & capturing

// Event delegation

// Prevent default vs stop propagation

// -----------------------Browser APIs

// localStorage, sessionStorage

// Cookies

// IndexedDB

// History API

// Intersection Observer

// Resize Observer

//--------------------------- Networking

// Fetch API

// Axios vs fetch

// HTTP methods

// Headers

// CORS

// Preflight requests

// 7️⃣ HTML & CSS (Frontend Interview Essentials)
//----------------------- HTML

// Semantic elements

// Accessibility basics (ARIA)

// Forms & validation

// Meta tags

//---------------------------- CSS

// Box model

// Positioning (static, relative, absolute, fixed, sticky)

// Flexbox

// Grid

// Z-index & stacking context

// Specificity & inheritance

// Pseudo-classes & pseudo-elements

// Responsive design

// Media queries

//-------------------------- Performance

// Critical CSS

// Reflow vs repaint

// 8️⃣ React Fundamentals (Non-Negotiable)
//------------------------ Core Concepts

// What is React & why it’s used

// Virtual DOM

// Reconciliation

// JSX

// One-way data flow

//-------------------------- Components

// Functional components

// Class components (legacy knowledge)

// Controlled vs uncontrolled components

//------------------------ Props & State

// Props drilling

// Lifting state up

// Derived state anti-patterns

// 9️⃣ React Hooks (Very Important)
//------------------------ Basic Hooks

// useState

// useEffect

// Dependency array

// Cleanup

// Infinite loops

// useRef

// useContext

//------------------------ Advanced Hooks

// useReducer

// useMemo

// useCallback

// useLayoutEffect

// useImperativeHandle

// useTransition

// useDeferredValue

// ------------------------Custom Hooks

// Rules of hooks

// Extracting logic

// Reusability

// 🔟 React Rendering & Internals (Interview Gold)
// ------------------------Rendering

// Initial render

// Re-render triggers

// Batching updates

// ------------------------React Fiber

// Why Fiber exists

// Reconciliation vs rendering

// Concurrent rendering

// Priority scheduling

// ------------------------Memoization

// React.memo

// When memoization hurts performance

// 1️⃣1️⃣ State Management
//------------------------ Built-in

// useState vs useReducer

// Context API

// Context performance pitfalls

// ------------------------External (Conceptual knowledge)

// Redux (classic & RTK)

// Zustand

// Recoil

// When to use what

// 1️⃣2️⃣ Forms & Validation

// Controlled inputs

// Debouncing inputs

// Form libraries (Formik, React Hook Form)

// Validation strategies

// 1️⃣3️⃣ Routing

// React Router

// SPA vs MPA

// Route params

// Lazy loading routes

// Protected routes

// 1️⃣4️⃣ Performance Optimization

// Code splitting

// Lazy loading (React.lazy, Suspense)

// Tree shaking

// Avoid unnecessary re-renders

// Virtualization (large lists)

// (You already have real experience here — bundle size, Webpack, tree-shaking 💯)

// 1️⃣5️⃣ Testing
//------------------------ Types

// Unit tests

// Integration tests

// E2E tests

// ------------------------ Tools

// Jest

// React Testing Library

// Shallow vs full DOM rendering

// Mocking APIs

// Testing useEffect

// 1️⃣6️⃣ Build Tools & Tooling

// Webpack (you know this well)

// Babel

// Vite

// ESLint

// Prettier

// NPM vs NPX

// package.json vs lock files

// 1️⃣7️⃣ Security (Often Asked)

// XSS

// CSRF

// SQL Injection (conceptual)

// HTTPS

// Content Security Policy

// SameSite cookies

// 1️⃣8️⃣ Architecture & Patterns

// Component composition

// Container vs presentational

// Atomic design

// BFF architecture (huge plus for you)

// Micro-frontends (conceptual)

// 1️⃣9️⃣ System Design (Frontend Level)

// How to design a dashboard

// How to build a chat UI

// Handling large datasets

// Pagination vs infinite scroll

// Caching strategies

// 2️⃣0️⃣ Behavioral + Project Questions

// Be ready to explain:

// Your role in Prompt Lab / Agent Lab / Vector Indexes

// Why certain architectural decisions were made

// Trade-offs

// Performance optimizations

// Collaboration with backend teams