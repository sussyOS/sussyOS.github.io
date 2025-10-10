# First Steps

Once SussyOS is installed, let's write your first program.
> [!WARNING]  
> SusScript will probalby not even compile, do not be dissapointed as we are in pre-alpha phase

## Create a new file

```bash
touch hello.sus
````

## Sample Code

```sus
func main() {
    throw "Hello, SussyOS!";
}
```

## Compile and Run

```bash
sussy hello.sus
./hello
```

> **Note:** This will print `Hello, SussyOS!` to your terminal.