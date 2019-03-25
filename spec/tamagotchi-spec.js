import { Select, Decide, Cancel, Reset } from './../src/tamagotchi.js';

describe('Select', function() {
  it('should test whether you can select an action', function() {
    let select = new Select('food', 'light', 'play', 'medicine', 'bath', 'health', 'discipline', 'attention');
    expect(select.option1).toEqual('food');
    expect(select.option2).toEqual('light');
    expect(select.option3).toEqual('play');
    expect(select.option4).toEqual('medicine');
    expect(select.option5).toEqual('bath');
    expect(select.option6).toEqual('health');
    expect(select.option7).toEqual('discipline');
    expect(select.option8).toEqual('attention');
  });
});

describe('Decide', function() {
  it('should test whether you can enter a selected action', function() {
    let decide = new Decide('food', 'light', 'play', 'medicine', 'bath', 'health', 'discipline', 'attention');
    expect(decide.option1).toEqual('food');
    expect(decide.option2).toEqual('light');
    expect(decide.option3).toEqual('play');
    expect(decide.option4).toEqual('medicine');
    expect(decide.option5).toEqual('bath');
    expect(decide.option6).toEqual('health');
    expect(decide.option7).toEqual('discipline');
    expect(decide.option8).toEqual('attention');
  });
});

describe('Cancel', function() {
  it('should test whether you can go back to previous options', function() {
    let cancel = new Cancel('home');
    expect(cancel.option1 || cancel.option2 || cancel.option3 || cancel.option4 || cancel.option5 || cancel.option6 || cancel.option7 || cancel.option8).toEqual('home');
  });
});

describe('Reset', function() {
  it('should test whether you can reset the game', function() {
    let reset = new Reset('new egg');
    expect(reset.home).toEqual('new egg');
  });
});

describe('Light/Sleep', function() {
  it('should test whether you can turn off the light', function() {
    //Test content will go here.
  });
});

describe('Use Light/Sleep', function() {
  it('should test whether you can turn off the light', function() {
    //Test content will go here.
  });
});

describe('Play', function() {
  it('should test whether you can play with your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Use Play', function() {
  it('should test whether you can play with your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Medicine', function() {
  it('should test whether you can heal your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Use Medicine', function() {
  it('should test whether you can heal your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Bath', function() {
  it('should test whether you can wash your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Use Bath', function() {
  it('should test whether you can wash your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Health Meter', function() {
  it('should test whether you can check the health and happiness of your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Use Health Meter', function() {
  it('should test whether you can check the health and happiness of your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Discipline', function() {
  it('should test whether you can train your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Use Discipline', function() {
  it('should test whether you can train your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Food', function() {
  it('should test whether you can feed your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Use Food', function() {
  it('should test whether you can feed your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Attention', function() {
  it('should test whether you can give attention to your Tamagotchi', function() {
    //Test content will go here.
  });
});

describe('Use Attention', function() {
  it('should test whether you can give attention to your Tamagotchi', function() {
    //Test content will go here.
  });
});
