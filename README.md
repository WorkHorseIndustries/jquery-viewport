jquery-viewport
===============

Extends jquery to allow filtering elements relative to the current viewport. 

Example
===============
The viewport methods behave the same as other jquery traversal functions,  they accept selectors as arguments and are chainable. 

$('div').aboveViewport();
Select all div's that are located above the current viewport. 


$('div').aboveViewport('.test');
Select all div's above the current viewport that have the class 'test'.




Methods
===============

aboveViewport

belowViewport

outsideViewport

insideViewport
