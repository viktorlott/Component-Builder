import styled, { createGlobalStyle } from 'styled-components'
import React from 'react'

export const GlobalStyles = createGlobalStyle`


`


export const CodeMirrorWrapper = styled.div`

    .CodeMirror-hscrollbar {
        display: none!important;
    }

    .CodeMirror-scroll {
        overflow: hidden!important;
    }

    * {





            .CodeMirror-hints {
    position: absolute;
    z-index: 10;
    overflow: hidden;
    list-style: none;

    margin: 0;
    padding: 2px!important;

    -webkit-box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    -moz-box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    box-shadow: 2px 3px 5px rgba(0,0,0,.2);
    border-radius: 3px;
    border: 1px solid silver;

    background: white;
    font-size: 90%;
    font-family: monospace;

    max-height: 50em!important;
    overflow-y: auto;
    }

    .CodeMirror-hint {
    margin: 0;
    padding: 0 4px;
    border-radius: 2px;
    white-space: pre;
    color: black;
    cursor: pointer;
    }



    }



`

