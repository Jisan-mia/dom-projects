$(function() {

    // all of the vars
    var staticCards = [];
    var deck = [];
    var tempDeck = [];
    var deckPile = [];
    var boardPile1 = [];
    var boardPile2 = [];
    var boardPile3 = [];
    var boardPile4 = [];
    var boardPile5 = [];
    var boardPile6 = [];
    var boardPile7 = [];
    var finalPile1 = [];
    var finalPile2 = [];
    var finalPile3 = [];
    var finalPile4 = [];
    var firstPile = [];
    var boardState1 = [];
    var boardState2 = [];
    var boardState3 = [];
    var boardState4 = [];
    var boardState5 = [];
    var boardState6 = [];
    var boardState7 = [];
    var finalState1 = [];
    var finalState2 = [];
    var finalState3 = [];
    var finalState4 = [];
    var deckPileState = [];
    var moves;
    var score;
    
    
    // Ace: 0, king: 12 
    // 0-12: hearts, 13-25:diamonds, 26-38:spades, 39-52:clubs
    
    //set up the board
    function init() {
        initializeVariables();
        resetClasses();
        staticCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
        deck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
        deck = makeRandom(deck);
        makePile(boardPile1, 1);
        makePile(boardPile2, 2);
        makePile(boardPile3, 3);
        makePile(boardPile4, 4);
        makePile(boardPile5, 5);
        makePile(boardPile6, 6);
        makePile(boardPile7, 7);
        $('.winMessage').text('');
        render();
    }
    
    function initializeVariables() {
    moves = 0;
    score = 0;
    tempDeck.length = 0;
    deckPile.length = 0; 
    boardPile1.length = 0;
    boardPile2.length = 0;
    boardPile3.length = 0;
    boardPile4.length = 0;
    boardPile5.length = 0;
    boardPile6.length = 0;
    boardPile7.length = 0;
    finalPile1.length = 0;
    finalPile2.length = 0;
    finalPile3.length = 0;
    finalPile4.length = 0;
    firstPile.length = 0;
    boardState1.length = 0;
    boardState2.length = 0;
    boardState3.length = 0;
    boardState4.length = 0;
    boardState5.length = 0;
    boardState6.length = 0;
    boardState7.length = 0;
    finalState1.length = 0;
    finalState2.length = 0;
    finalState3.length = 0;
    finalState4.length = 0;
    deckPileState.length = 0;
    }
    
    function resetClasses() {
        var rows = $('td');
        for (var i = 0; i < rows.length; i++) {
            $(rows[i]).removeClass('hA h01 h02 h03 h04 h05 h06 h07 h08 h09 h10 hJ hQ hK dA d01 d02 d03 d04 d05 d06 d07 d08 d09 d10 dJ dQ dK sA s01 s02 s03 s04 s05 s06 s07 s08 s09 s10 sJ sQ sK cA c01 c02 c03 c04 c05 c06 c07 c08 c09 c10 cJ cQ cK faceUp')
        }
    }
    
    //permanent event listeners
    $('.deck').on('click', function(evt) {
    
        if (deck.length > 0) {
            deckPile.unshift(deck.shift())
            moves++
            render();
        }
        else reloadDeck();
    })
    
    $('.deckPile').on('click', function(evt) {
        if (deckPile.length > 0) {
            firstPile.length = 0;
            firstPile.unshift(deckPile[0]);
            $(this).css('opacity', '.8')
        }
    })
    
    $('.finalPile1, .finalPile2, .finalPile3, .finalPile4').on('click', function(evt) {
        if (firstPile.length === 1) {
            if ($(this).hasClass('finalPile1')) {
                checkFinalMove(firstPile, finalPile1);
                }
            else if ($(this).hasClass('finalPile2')) {
                checkFinalMove(firstPile, finalPile2);
                }
            else if ($(this).hasClass('finalPile3')) {
                checkFinalMove(firstPile, finalPile3);
                }
            else if ($(this).hasClass('finalPile4')) {
                checkFinalMove(firstPile, finalPile4);
                }
            else;        
        }
        resetFirstPile();
        })
    
    $('button').on('click', function(evt) {
        init();
    })
    
    //deck randomizer
    function makeRandom(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
    
    // create initial piles
    function makePile(pile, num) {
        for (var i = 0; i < num; i++)
        pile.unshift(deck.shift());
    }
    
    // creates click event for empty tds
    // (functionally identical to faceUpClick on [0])
    function addEmptyClick() {
    $('.empty').off();
    $('.empty').on('click', function(evt) {
        if (firstPile.length === 0) {
            if ($(this).hasClass('boardPile1')) {
                firstPile.unshift(boardPile1[0])
                $(boardState1[boardPile1.length-1]).css('opacity', '.8')
            }
            else if ($(this).hasClass('boardPile2')) {
                firstPile.unshift(boardPile2[0])
                $(boardState2[boardPile2.length-1]).css('opacity', '.8')
            }
            else if ($(this).hasClass('boardPile3')) {
                firstPile.unshift(boardPile3[0])
                $(boardState3[boardPile3.length-1]).css('opacity', '.8')
            }
            else if ($(this).hasClass('boardPile4')) {
                firstPile.unshift(boardPile4[0])
                $(boardState4[boardPile4.length-1]).css('opacity', '.8')
            }
            else if ($(this).hasClass('boardPile5')) {
                firstPile.unshift(boardPile5[0])
                $(boardState5[boardPile5.length-1]).css('opacity', '.8')
            }
            else if ($(this).hasClass('boardPile6')) {
                firstPile.unshift(boardPile6[0])
                $(boardState6[boardPile6.length-1]).css('opacity', '.8')
            }
            else if ($(this).hasClass('boardPile7')) {
                firstPile.unshift(boardPile7[0])
                $(boardState7[boardPile7.length-1]).css('opacity', '.8')
            }
        }
        else {
            if ($(this).hasClass('boardPile1')) {
                checkBoardMove(firstPile, boardPile1)
                }
            else if ($(this).hasClass('boardPile2')) {
                checkBoardMove(firstPile, boardPile2) 
            }
            else if ($(this).hasClass('boardPile3')) {
                    checkBoardMove(firstPile, boardPile3)
                }
            else if ($(this).hasClass('boardPile4')) {
                checkBoardMove(firstPile, boardPile4)
            }
            else if ($(this).hasClass('boardPile5')) {
                checkBoardMove(firstPile, boardPile5)
            }
            else if ($(this).hasClass('boardPile6')) {
                checkBoardMove(firstPile, boardPile6)
            }
            else if ($(this).hasClass('boardPile7')) {
                checkBoardMove(firstPile, boardPile7)
        }}
    })}
    
    function selectPile() {
        if ($(boardPile1).inArray) {
            $('.boardPile1').css('opacity', '.8');
        }
    }
    
    // Ace: 0, king: 12 
    // 0-12: hearts, 13-25:diamonds, 26-38:spades, 39-52:clubs
    // Checks the legality of any move on the main board
    function checkBoardMove(firstPile, secondPile) {
        if (secondPile.length === 0) {
            legal(firstPile, secondPile);
        }
        else if (firstPile[firstPile.length-1] === 12 || firstPile[firstPile.length-1] === 25 || firstPile[firstPile.length-1] === 38 || firstPile[firstPile.length-1] === 51 ) {
            illegal();
        }
            else if (firstPile[firstPile.length-1] < 13) {
                if (secondPile[0] === firstPile[firstPile.length-1] + 27 || secondPile[0] === firstPile[firstPile.length-1] + 40) {
                    legal(firstPile, secondPile);
                }
                else illegal()}
            else if (firstPile[firstPile.length-1] < 26) {
                if (secondPile[0] === firstPile[firstPile.length-1] + 14 || secondPile[0] === firstPile[firstPile.length-1] + 27) {
                    legal(firstPile, secondPile);
                }
                else illegal()}
            else if (firstPile[firstPile.length-1] < 39) {
                if (secondPile[0] === firstPile[firstPile.length-1] - 12 || secondPile[0] === firstPile[firstPile.length-1] - 25) {
                    legal(firstPile, secondPile);
                }
                else illegal()}
            else if (firstPile[firstPile.length-1] < 52) {
                if (secondPile[0] === firstPile[firstPile.length-1] - 25 || secondPile[0] === firstPile[firstPile.length-1] - 38) {
                    legal(firstPile, secondPile);
                }
                else illegal()}  
        }
    
    // checks legality of moves onto the final piles
    function checkFinalMove(firstPile, secondPile) {
        if (firstPile.length === 1) {
            if (firstPile[0] === staticCards[0] || firstPile[0] === staticCards[13] || firstPile[0] === staticCards[26] || firstPile[0] === staticCards[39]) {
                if (secondPile.length === 0) {
                legal(firstPile, secondPile);
                }
                else illegal();
                }
            else if (firstPile[0] === secondPile[0] + 1) {
                legal(firstPile, secondPile)
            }
            else illegal();
        }
        else illegal();
    }
    
    // processes legal moves
    function legal(firstPile, secondPile) {
        for (var i = firstPile.length-1; i >= 0; i--) {
            secondPile.unshift(firstPile[i])
        };
        secondPile.unshift('placeholder');
        switch (firstPile[0]) {
            case deckPile[0]: 
                for (var i = firstPile.length; i > 0; i--) 
                    {deckPile.shift()}
            break;
            case boardPile1[0]: 
                for (var i = firstPile.length; i > 0; i--) 
                    {boardPile1.shift()}
            break;
            case boardPile2[0]: 
                for (var i = firstPile.length; i > 0; i--)
                    {boardPile2.shift()}
            break;
            case boardPile3[0]: 
                for (var i = firstPile.length; i > 0; i--)
                    {boardPile3.shift()}
            break;
            case boardPile4[0]: 
                for (var i = firstPile.length; i > 0; i--) {
                    boardPile4.shift()}
            break;
            case boardPile5[0]: 
                for (var i = firstPile.length; i > 0; i--) {
                    boardPile5.shift()}
            break;
            case boardPile6[0]: 
                for (var i = firstPile.length; i > 0; i--)
                    {boardPile6.shift()}
            break;
            case boardPile7[0]: 
                for (var i = firstPile.length; i > 0; i--)
                    {boardPile7.shift()}
            break;
            case finalPile1[0]: 
                for (var i = firstPile.length; i > 0; i--) {
                    finalPile1.shift()}
            break;
            case finalPile2[0]: 
                for (var i = firstPile.length; i > 0; i--) {
                    finalPile2.shift()}
            break;
            case finalPile3[0]: 
                for (var i = firstPile.length; i > 0; i--)
                    {finalPile3.shift()}
            break;
            case finalPile4[0]: 
                for (var i = firstPile.length; i > 0; i--)
                    {finalPile4.shift()}
            break;
        }
        resetFirstPile();
        secondPile.shift();
        moves++;
        render();
    }
    
    // returns the board to normal state after an illegal move
    function illegal() {
        resetFirstPile();
        render();
        }
    
    // flips the deckPile into the deck when the deck is empty
    function reloadDeck() {
        if (deck.length === 0) {
            for (var i = deckPile.length; i > 0; i--) {
                deck.unshift(deckPile.shift());
            }};
    }
    
    // win condition
    function checkWin() {
        if (finalPile1[0] === staticCards[12] || finalPile1[0] === staticCards[25] || finalPile1[0] === staticCards[38] || finalPile1[0] === staticCards[51]) {
            if (finalPile2[0] === staticCards[12] || finalPile2[0] === staticCards[25] || finalPile2[0] === staticCards[38] || finalPile2[0] === staticCards[51]) {
                if (finalPile3[0] === staticCards[12] || finalPile3[0] === staticCards[25] || finalPile3[0] === staticCards[38] || finalPile3[0] === staticCards[51]) {
                    if (finalPile4[0] === staticCards[12] || finalPile4[0] === staticCards[25] || finalPile4[0] === staticCards[38] || finalPile4[0] === staticCards[51]) {
                        $('.winMessage').text('You win!');
                        
                    }
                }
            }
        }
        else return;
    }
    
    // renders the top table and cards
    function renderTop() {
        if (deck.length > 0) {
            $('.deck').addClass('card').addClass('back-blue');
        }
        else $(".deck").removeClass('back-blue');
        if (deckPile.length > 0) {
            $('.deckPile').removeClass().addClass('deckPile').addClass('card')
            deckPileState = $('deckPile')
            renderCard('.deckPile', deckPile[0]);
        }
        else $('.deckPile').removeClass().addClass('deckPile').addClass('card');
        if (finalPile1.length > 0) {
            finalState1 = $('.finalPile1');
            removeExtraClasses('.finalPile1');
            renderCard(finalState1[0], finalPile1[0])
        }
        if (finalPile2.length > 0) {
            finalState2 = $('.finalPile2');
            removeExtraClasses('.finalPile2');        
            renderCard(finalState2[0], finalPile2[0])
        }
        if (finalPile3.length > 0) {
            finalState3 = $('.finalPile3');
            removeExtraClasses('.finalPile3');        
            renderCard(finalState3[0], finalPile3[0])
        }
        if (finalPile4.length > 0) {
            finalState4 = $('.finalPile4');
            removeExtraClasses('.finalPile4');        
            renderCard(finalState4[0], finalPile4[0])
        }
    }
    
    // removes excess classes from finalPiles, cleaning up the render
    function removeExtraClasses(pile) {
        $(pile).removeClass('hA h01 h02 h03 h04 h05 h06 h07 h08 h09 h10 hJ hQ hK dA d01 d02 d03 d04 d05 d06 d07 d08 d09 d10 dJ dQ dK sA s01 s02 s03 s04 s05 s06 s07 s08 s09 s10 sJ sQ sK cA c01 c02 c03 c04 c05 c06 c07 c08 c09 c10 cJ cQ cK faceUp');
    }
    
    // renders piles from last to first, if tr 1 is taken, go tr 2
    function renderPiles() {
        if (boardPile1.length > 0) {
            boardState1 = $('.boardPile1');
            var difference = (1 + (boardState1.length - boardPile1.length));
            for (var i = 0; i < boardState1.length; i++)
                if (boardPile1[boardPile1.length-1] !== undefined) {            
                    if (i >= boardPile1.length) {
                        renderCard(boardState1[i], boardPile1[i])
                    }
                    else {renderCard(boardState1[boardState1.length - difference - i], boardPile1[i])
                }}}
        else {$('.boardPile1').removeClass().addClass('boardPile1').addClass('card').addClass('faceUp');
            boardState1 = $('.boardPile1');
            for (var i = 1; i < boardState1.length; i++) {
                renderCard(boardState1[i], boardPile1[i])
            }}
        if (boardPile2.length > 0) {
            boardState2 = $('.boardPile2');
            var difference = (1 + (boardState2.length - boardPile2.length));
            for (var i = 0; i < boardState2.length; i++)
                if (boardPile2[boardPile2.length-1] !== undefined) {
                    if (i >= boardPile2.length) {
                        renderCard(boardState2[i], boardPile2[i])
                    }
                    else {renderCard(boardState2[boardState2.length - difference - i], boardPile2[i])
                }}}
        else {$('.boardPile2').removeClass().addClass('boardPile2').addClass('card').addClass('faceUp');
            boardState2 = $('.boardPile2');
            for (var i = 1; i < boardState2.length; i++) {
                renderCard(boardState2[i], boardPile2[i])
            }}                                
        if (boardPile3.length > 0) {
            boardState3 = $('.boardPile3');
            var difference = (1 + (boardState3.length - boardPile3.length));
            for (var i = 0; i < boardState3.length; i++)
                if (boardPile3[boardPile3.length-1] !== undefined) {
                    if (i >= boardPile3.length) {
                        renderCard(boardState3[i], boardPile3[i])
                    }
                    else {renderCard(boardState3[boardState3.length - difference - i], boardPile3[i])
                }}}
        else {$('.boardPile3').removeClass().addClass('boardPile3').addClass('card').addClass('faceUp');
            boardState3 = $('.boardPile3');
            for (var i = 1; i < boardState3.length; i++) {
                renderCard(boardState3[i], boardPile3[i])
            }}
        if (boardPile4.length > 0) {
            boardState4 = $('.boardPile4');
            var difference = (1 + (boardState4.length - boardPile4.length));
            for (var i = 0; i < boardState4.length; i++)
                if (boardPile4[boardPile4.length-1] !== undefined) {
                    if (i >= boardPile4.length) {
                        renderCard(boardState4[i], boardPile4[i])
                    }
                    else {renderCard(boardState4[boardState4.length - difference - i], boardPile4[i])
                }}}
        else {$('.boardPile4').removeClass().addClass('boardPile4').addClass('card').addClass('faceUp');
            boardState4 = $('.boardPile4');
            for (var i = 1; i < boardState4.length; i++) {
                renderCard(boardState4[i], boardPile4[i])
            }}
        if (boardPile5.length > 0) {
            boardState5 = $('.boardPile5');
            var difference = (1 + (boardState5.length - boardPile5.length));
            for (var i = 0; i < boardState5.length; i++)
                if (boardPile5[boardPile5.length-1] !== undefined) {
                    if (i >= boardPile5.length) {
                        renderCard(boardState5[i], boardPile5[i])
                    }
                    else {renderCard(boardState5[boardState5.length - difference - i], boardPile5[i])
                }}}
        else {$('.boardPile5').removeClass().addClass('boardPile5').addClass('card').addClass('faceUp');
            boardState5 = $('.boardPile5');
            for (var i = 1; i < boardState5.length; i++) {
                renderCard(boardState5[i], boardPile5[i])
            }}
        if (boardPile6.length > 0) {
            boardState6 = $('.boardPile6');
            var difference = (1 + (boardState6.length - boardPile6.length));
            for (var i = 0; i < boardState6.length; i++)
                if (boardPile6[boardPile6.length-1] !== undefined) {
                    if (i >= boardPile6.length) {
                        renderCard(boardState6[i], boardPile6[i])
                    }
                    else {renderCard(boardState6[boardState6.length - difference - i], boardPile6[i])
                }}}
        else {$('.boardPile6').removeClass().addClass('boardPile6').addClass('card').addClass('faceUp');
            boardState6 = $('.boardPile6');
            for (var i = 1; i < boardState6.length; i++) {
                renderCard(boardState6[i], boardPile6[i])
            }}
        if (boardPile7.length > 0) {
            boardState7 = $('.boardPile7');
            var difference = (1 + (boardState7.length - boardPile7.length));
            for (var i = 0; i < boardState7.length; i++)
                if (boardPile7[boardPile7.length-1] !== undefined) {
                    if (i >= boardPile7.length) {
                        renderCard(boardState7[i], boardPile7[i])
                    }
                    else {renderCard(boardState7[boardState7.length - difference - i], boardPile7[i])
                }}}
        else {$('.boardPile7').removeClass().addClass('boardPile7').addClass('card').addClass('faceUp');
            boardState7 = $('.boardPile7');
            for (var i = 1; i < boardState7.length; i++) {
                renderCard(boardState7[i], boardPile7[i])
            }}
        };
    
    // Flips over the first card in each board array
    function flipFirstCard() {
        if (boardPile1.length > 0); {
            $(boardState1[boardPile1.length-1]).addClass('faceUp').removeClass('back-blue')}
        if (boardPile2.length > 0); {
            $(boardState2[boardPile2.length-1]).addClass('faceUp').removeClass('back-blue')}
        if (boardPile3.length > 0); {
            $(boardState3[boardPile3.length-1]).addClass('faceUp').removeClass('back-blue')}
        if (boardPile4.length > 0); {
            $(boardState4[boardPile4.length-1]).addClass('faceUp').removeClass('back-blue')}
        if (boardPile5.length > 0); {
            $(boardState5[boardPile5.length-1]).addClass('faceUp').removeClass('back-blue')}
        if (boardPile6.length > 0); {
            $(boardState6[boardPile6.length-1]).addClass('faceUp').removeClass('back-blue')}
        if (boardPile7.length > 0); {
            $(boardState7[boardPile7.length-1]).addClass('faceUp').removeClass('back-blue')}};
    
    // Flips over all cards stacked on top of flipped cards--catch-all for 'faceUp class'
    function flipAllOtherCards() {
        flipOtherCards(boardState1);
        flipOtherCards(boardState2);    
        flipOtherCards(boardState3);    
        flipOtherCards(boardState4);    
        flipOtherCards(boardState5);    
        flipOtherCards(boardState6);    
        flipOtherCards(boardState7);  
    }
    
    function flipOtherCards(arr) {
        for (var i = 0; i < arr.length; i++) {
            if ($(arr[i]).hasClass('faceUp')) {
                $(arr[i+1]).addClass('faceUp')
            }
        }
    }
    
    // The fall-back render function--if something on the board does not have another
    // class, then the card is rendered as a cardback
    function renderFaceDowns() {  
    for (var i = 0; i < boardPile1.length; i++)
        if ($(boardState1[i]).hasClass('faceUp' || 'empty' || 'back-blue')) {}
        else {$(boardState1[i]).addClass('back-blue')}
    for (var i = 0; i < boardPile2.length; i++)
        if ($(boardState2[i]).hasClass('faceUp' || 'empty' || 'back-blue')) {}
        else {$(boardState2[i]).addClass('back-blue')}
    for (var i = 0; i < boardPile3.length; i++)
        if ($(boardState3[i]).hasClass('faceUp' || 'empty' || 'back-blue')) {}
        else {$(boardState3[i]).addClass('back-blue')}
    for (var i = 0; i < boardPile4.length; i++)
        if ($(boardState4[i]).hasClass('faceUp' || 'empty' || 'back-blue')) {}
        else {$(boardState4[i]).addClass('back-blue')}
    for (var i = 0; i < boardPile5.length; i++)
        if ($(boardState5[i]).hasClass('faceUp' || 'empty' || 'back-blue')) {}
        else {$(boardState5[i]).addClass('back-blue')}
    for (var i = 0; i < boardPile6.length; i++)
        if ($(boardState6[i]).hasClass('faceUp' || 'empty' || 'back-blue')) {}
        else {$(boardState6[i]).addClass('back-blue')}
    for (var i = 0; i < boardPile7.length; i++)
        if ($(boardState7[i]).hasClass('faceUp' || 'empty' || 'back-blue')) {}
        else {$(boardState7[i]).addClass('back-blue')}
    }
    
    // Assigns a CSS class and associated image based on array data
    function renderCard(pile, num) {
        switch(num) {
        case 0: $(pile).addClass('hA');
            break;
        case 1: $(pile).addClass('h02');
            break;
        case 2: $(pile).addClass('h03');
            break;
        case 3: $(pile).addClass('h04');
            break;
        case 4: $(pile).addClass('h05');
            break;
        case 5: $(pile).addClass('h06');
            break;
        case 6: $(pile).addClass('h07');
            break;
        case 7: $(pile).addClass('h08');
            break;
        case 8: $(pile).addClass('h09');
            break;
        case 9: $(pile).addClass('h10');
            break;
        case 10: $(pile).addClass('hJ');
            break;
        case 11: $(pile).addClass('hQ');
            break;
        case 12: $(pile).addClass('hK');
            break;
        case 13: $(pile).addClass('dA');
            break;
        case 14: $(pile).addClass('d02');
            break;
        case 15: $(pile).addClass('d03');
            break;
        case 16: $(pile).addClass('d04');
            break;
        case 17: $(pile).addClass('d05');
            break;
        case 18: $(pile).addClass('d06');
            break;
        case 19: $(pile).addClass('d07');
            break;
        case 20: $(pile).addClass('d08');
            break;
        case 21: $(pile).addClass('d09');
            break;
        case 22: $(pile).addClass('d10');
            break;
        case 23: $(pile).addClass('dJ');
            break;
        case 24: $(pile).addClass('dQ');
            break;
        case 25: $(pile).addClass('dK');
            break;
        case 26: $(pile).addClass('sA');
            break;
        case 27: $(pile).addClass('s02');
            break;
        case 28: $(pile).addClass('s03');
            break;
        case 29: $(pile).addClass('s04');
            break;
        case 30: $(pile).addClass('s05');
            break;
        case 31: $(pile).addClass('s06');
            break;
        case 32: $(pile).addClass('s07');
            break;
        case 33: $(pile).addClass('s08');
            break;
        case 34: $(pile).addClass('s09');
            break;
        case 35: $(pile).addClass('s10');
            break;
        case 36: $(pile).addClass('sJ');
            break;
        case 37: $(pile).addClass('sQ');
            break;
        case 38: $(pile).addClass('sK');
            break;
        case 39: $(pile).addClass('cA');
            break;
        case 40: $(pile).addClass('c02');
            break;
        case 41: $(pile).addClass('c03');
            break;
        case 42: $(pile).addClass('c04');
            break;
        case 43: $(pile).addClass('c05');
            break;
        case 44: $(pile).addClass('c06');
            break;
        case 45: $(pile).addClass('c07');
            break;
        case 46: $(pile).addClass('c08');
            break;
        case 47: $(pile).addClass('c09');
            break;
        case 48: $(pile).addClass('c10');
            break;
        case 49: $(pile).addClass('cJ');
            break;
        case 50: $(pile).addClass('cQ');
            break;
        case 51: $(pile).addClass('cK');
            break;}
    if (num === undefined) {
    
        $(pile).removeClass('hA h01 h02 h03 h04 h05 h06 h07 h08 h09 h10 hJ hQ hK dA d01 d02 d03 d04 d05 d06 d07 d08 d09 d10 dJ dQ dK sA s01 s02 s03 s04 s05 s06 s07 s08 s09 s10 sJ sQ sK cA c01 c02 c03 c04 c05 c06 c07 c08 c09 c10 cJ cQ cK faceUp').addClass('empty');
    }
    else {$(pile).removeClass('empty')}
    }
    
    // resets the firstPile variable
    function resetFirstPile() {
        firstPile.length = 0;
            render();
        }
    
    // updates the score feature
    function updateScore() {
        score = (finalPile1.length + finalPile2.length + finalPile3.length + finalPile4.length) * 25;
        $('.score').text('Score: ' + score)
    }
    
    //updates the movecounter feature
    function updateMoves() {
        $('.moveCounter').text('Moves: ' + moves)
    }
    
    // normalizes opacity
    function makeFaceUpSolid() {
        $('.faceUp').not('.empty').css('opacity', '.99');
        $('.empty').css('opacity', '0');
        $('.deckPile').css('opacity', '1');
        $('.back-blue').css('opacity', '1');
    }
    
    function render() {
        checkWin();
        renderPiles();
        renderFaceDowns();    
        flipFirstCard();
        flipAllOtherCards();      
        renderTop();
        addFaceUpClick();
        addEmptyClick();    
        updateScore();
        updateMoves();
        makeFaceUpSolid();
    }
    
    function addFaceUpClick() {
        $('.faceUp').off();
    var $faceUps = $('td');
    for (var i = 7; i < $faceUps.length; i++) {
        if (i % 7 === 0) {
            selectBoardPile($faceUps, i, boardPile1, boardPile1.length - (i/7));
        }
        else if (i % 7 === 1 ) {
            selectBoardPile($faceUps, i, boardPile2, boardPile2.length - ((i-1)/7));
        }
        else if (i % 7 === 2 ) {
            selectBoardPile($faceUps, i, boardPile3, boardPile3.length - ((i-2)/7));
        }
        else if (i % 7 === 3 ) {
            selectBoardPile($faceUps, i, boardPile4, boardPile4.length - ((i-3)/7));
        }
        else if (i % 7 === 4 ) {
            selectBoardPile($faceUps, i, boardPile5, boardPile5.length - ((i-4)/7));
        }
        else if (i % 7 === 5 ) {
            selectBoardPile($faceUps, i, boardPile6, boardPile6.length - ((i-5)/7));
        }
        else if (i % 7 === 6 ) {
            selectBoardPile($faceUps, i, boardPile7, boardPile7.length - ((i-6)/7));
        }
    }
    };
    
    function selectBoardPile($faceUps, i, pile, num) {
        $($faceUps[i]).on('click', function(evt) {
            if (firstPile.length === 0) {
                if ($(this).hasClass('empty')) {
                    addEmptyToFirstPile(pile[0])
                }
                else {
                    addToFirstPile(pile, num);
                    $(this).css('opacity', '.8')
                }}
            else checkBoardMove(firstPile, pile)
    })}
    
    function addToFirstPile(pile, num) {
        for (var i = num; i >= 0; i--) {
            firstPile.unshift(pile[i])
        }
    }
    function addEmptyToFirstPile(card) {
        firstPile.unshift(card);
    }
    
    init();
    })
    
    
    