# Pipes

Pipes provide a way to transform values in an Angular template, you can use the pipe symbol ( | ) and they can take almost any datatype and transform it

There are many built-in pipes in Angular:

-   Date pipe: used to formatting dates
-   Decimal pipe: used to formatting numbers
-   Currency pipe: used for formatting currencies
-   Percent pipe: used to formatting percent values
-   Slice pipe: used for slicing string
-   Lowecase pipe: used to convert strings to lowercase
-   Uppercase pipe: used to convert strings to uppercase
-   Titlecase: use to convert string to titlecase
-   Json pipe: used for converting values into a json format
-   Async pipe: used for unwrapping values from an asynchronous primitive

# Custom Pipes

Not only are there built-in pipes, you can also create your own

To create a custom pipe, use the CLI command `ng g pipe pipe-name`

This will create two files, a name.pipe.ts file, and a name.pipe.spec.ts file, to implement your pipe include your logic in the name.pipe.ts file

The name.pipe.ts file will have a class that implements PipeTransform, and you must implement the method transform from this interface

# Services and Dependency Injection

Services are used to organize and share business logic, models, data or functions with different components of an Angular Application

Each service is a singleton instance that can be injected into multiple components. Essentially creating reusable code

In Angular a service is a class that is used to share data across multiple components, and they live in a file with .services.ts extension

We use Dependency Injection to inject services into components of our application

Dependency Injection allows a class to receive its dependencies from an outside source, instead of creating them itself

-   This helps decouple our code

The framework uses an Injector where we register all the dependencies to be managed, it is repsonisble for creating service instances and injectsing them into components

The Injector holds all the services, registers them with the NgModule or if otherwise specified wiht their provider

-   The provider tells where in the application to register the service
-   The registered services can be accessed via Depenency Injection token, which is a lookup key

## Creating/Using a service

To create a service use `ng g s name` this will create a name.service.ts file with the @Injectable decorator on the class

@Injectable marks a class as a service that can be injected

-   The proviedIn property allows you to set the service class, it also declares where it can be used
-   The Injector provides the single instance of our service
-   A hierarchy of injectors at the NgModule and component level can provide different instances of a service to their own compoents and child components

# Pub/Sub Design Pattern

Publisher/Subscriber Design Pattern describes the flow of messages between applications, devices, or services

A message is published to a channel, then consumed by a subscriber monitoring that channel

-   When a message is published the subscriber is notified
-   Messages can be anything
-   We typically implement this in an asynchronous way

# RxJS - Observable

RxJS stands for Reactive Extension for JavaScript, and is a framework for reactive programming using observables that makes it easier to write asynchronous code

Observables provide support for passing message between parts of your application, we use these for event handling, async programming, and handling multiple values

The observer pattern is similar to pub/sub. Observables define a funtion for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifiations until the function completes, or they unsubscribe

To consume values from an observable you use the .subscribe() method passing an observer, the unsubscribe() method stops observing

The observer defines three callback methods:

-   next(): called whenever a value arrives in the stream
-   error(): called if an error occurs
-   complete(): called when the stream is complete

## Promise vs Observable

-   A promise emits only one single value, while Observables emit a stream of multiple calues

# RxJS - Subjects

Subjects are a special type of Observable that allows values to be multicasted to many Observers

Every Subject is an Observable with the same next(), error(), and complete() methods. To feed values to the subject you call the next() method, and it will be multicast to all the Observers registered to listen to the Subject

There are three variants of subjects:

-   Behavior is used to tempararily store the current data value of any observer declared before it
-   Replay provides an option to choose how many values we cant to emit from the last observer. This subject stores and then passes the last specified option values to the new observer
-   Async emits the last value to observables when the sequence is complete, only execute the subject after complete() is called

### Credit to Ethan McGill for the majority of the content in these notes!

