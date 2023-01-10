# Event Bubbling And Event Capturing in JavaScript  
  
# Event Bubbling :  
    Event Bubbling is a sequence of calling the event handlers when one element is nested in another element , and both the elements have registered listeners for the      same event.  
      
 Here, the event flow is in upward direction(i.e. begins from CHILD to parents covering all it's ancestors on the way up ...) 

Similarly, in JavaScript ,we use the *event.stopPropagation()*method to stop the bubling when the event has been processed completely.  
    
![Screenshot](https://github.com/Ad-Manisha/WT/blob/main/Assignments/Assignment-6/Assets/event_bubbling.png)
 <pre>  
    
    
</pre>


# Event Capturing :
    Event Capturing is opposite to the Event Bubbling . In event capturing , an event moves from the outermost element to the target ...  

    Here, the event flow is in downward direction(i.e. begins from Ancestor to child covering all on the way down ...) 
      
   ![Screenshot](https://github.com/Ad-Manisha/WT/blob/main/Assignments/Assignment-6/Assets/event_capturing.png)
