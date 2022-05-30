import React from 'react';
import { Container } from 'react-bootstrap';

const MotoBlog = () => {
    return (
        <Container className='border rounded p-5' style={{ backgroundColor: '#F8F9FA' }}>
            <p className='fs-3 mt-5 mb-3'>1.How will you improve the performance of a React Application??</p>
            <p className='mb-3'>Enhancing execution in a React application:
                Keeping part state nearby where fundamental.
                Memoizing React parts to forestall superfluous re-renders.
                Code-parting in React utilizing dynamic import()
                Windowing or list virtualization in React.
                Languid stacking pictures in React.</p>


            <p className='fs-3 mt-5 mb-3'>2.What are the different ways to manage a state in a React application??</p>
            <p className='mb-3'>Local state is maybe the most straightforward sort of state to oversee in React, taking into account there are such countless apparatuses incorporated into the center React library for overseeing it.

                useState is the main apparatus you ought to go after to oversee state in your parts.

                It can take acknowledge any substantial information esteem, including crude and article values. Moreover, its setter capacity can be passed down to different parts as a callback work (without requiring improvements like useCallback).
                useReducer is one more choice that can be utilized for one or the other nearby or worldwide state. It is comparable in numerous ways to useState in the engine, in spite of the fact that rather than simply an underlying state it acknowledges a minimizer.

                The advantage of useReducer is that it gives an inherent method for playing out various different state tasks with the assistance of the minimizer work, which makes it more powerful in general than useState.</p>

            <p className='fs-3 mt-5 mb-3'>3.How does prototypical inheritance work?</p>
            <p className='mb-3'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>


            <p className='fs-3  mt-5 mb-3'>4.Why you do not set the state directly in React?</p>
            <p className='mb-3'>React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn't update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM.</p>

            <p className='fs-3  mt-5 mb-3'>5.What is a unit test? Why should write unit tests?</p>
            <p className='mb-3'>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>




        </Container>
    );
};

export default MotoBlog;