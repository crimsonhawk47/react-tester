import Footer from '../components/Footer'

import ReactTester from './ReactTester'
import React, { Component } from 'react'

const FooterInstance = new ReactTester(
    <Footer />
)

FooterInstance.addTest('Has a footer element', () => {
    const footers = document.body.getElementsByTagName('footer').length
    expect(footers).toBe(1)
})

FooterInstance.runTests();
