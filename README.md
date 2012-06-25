# sizeToBytes.js 
A simple function that returns the number of bytes in a human readable size.

sizeToBytes.js by [Anton Samper Rivaya] (http://aeser.co.uk) is licensed under a [Creative Commons Attribution 3.0] (http://creativecommons.org/licenses/by/3.0/) Unported License, Copyright 2012.

Contributions from [Willie Oliveira] (https://github.com/willieoliveira) and [Erik Corry] (https://github.com/erikcorry)

###Syntax:

``` javascript
sizeToBytes(int, string);
```

###Arguments:

- `int`	Numeric value for size.
- `string` Format of numeric value - Allowed formats: `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`

###Returns:

- `int` The arguments as an integer.
- `NaN` The format of the number is not recognised.

###Example:

``` javascript
sizeToBytes(1, 'KB');	//1024
sizeToBytes(1, 'MB');	//1048576
sizeToBytes(1, 'TB');	//1099511627776
```