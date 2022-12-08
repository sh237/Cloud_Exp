// Receiver
class Curtain { 
	public void open() { 
		System.out.println("Curtain is on."); 
	} 
	public void close() { 
		System.out.println("Curtain is off."); 
	} 
}

// Command 
interface Command {
 	public abstract void execute (); 
}

// ConcreteCommand 
class CurtainOpenCommand implements Command { 
	private Curtain myCurtain; 
	public CurtainOpenCommand(Curtain l) { 
		myCurtain = l; 
	} 
	public void execute() {
        myCurtain.open(); 
	} 
}
class CurtainCloseCommand implements Command { 
	private Curtain myCurtain; 
	public CurtainCloseCommand(Curtain l) { 
		myCurtain = l; 
	} 
	public void execute() {
        myCurtain.close(); 
	} 
}

// Invoker 
class OpenAndClose { 
	private Command openCommand, closeCommand; 
	public OpenAndClose(Command open, Command close){ 
		openCommand = open; 
		closeCommand =close; 
	} 
	void open() {
		openCommand.execute () ; 
	} 
	void close() { 
		closeCommand.execute (); 
	} 
}

// Client 
class TestCommand { 
	public static void main(String[] args) { 
		Curtain aCurtain = new Curtain( ); 
		Command openC = new CurtainOpenCommand(aCurtain); 				
        Command closeC = new CurtainCloseCommand(aCurtain); 
		OpenAndClose aOpenAndClose = new OpenAndClose( openC, closeC); 					
        aOpenAndClose.open();
		aOpenAndClose.close( ); 
	} 
}

