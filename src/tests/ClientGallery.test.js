import ReactTester from './ReactTester'
import React, { Component } from 'react';

import ClientGallery from '../components/ClientGallery/ClientGallery'

const ClientGalleryTester = new ReactTester(
    <ClientGallery match={{ params: '' }} />
)

ClientGalleryTester.setupStore({
    client: { selectedClientMedia: [] },
    user: {}
})

ClientGalleryTester.addTest('First h1 should say Client Gallery', () => {
    const firsth1 = document.body.getElementsByTagName('h1')[0]
    expect(firsth1.textContent).toBe('Client Gallery')
})



ClientGalleryTester.runTests()

