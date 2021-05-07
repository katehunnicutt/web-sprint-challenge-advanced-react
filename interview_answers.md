# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
Functional components without state do not change and simply render what is handcoded into the document, or whatever is passed down via props. Stateful components are smart and contains state, dynamic data, via a variety of methods.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
the componentWillMount function is called once right before the components mounts and the componentWillUpdate function is called directng before rerendering of the component

3. Define stateful logic.
stateful logic is the logic behind sharing state. With our custom hooks we share the method of this state, but we don't pass the data back and forth by default.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, Act, and Assert. when arranging, we render the component in question and get the necessary elements, in act we mock the events needed for that test to run, for example typing or clicking on something. Finally in assert we declare what is be tested and where it is supposed to be.
