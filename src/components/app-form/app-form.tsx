import { Component, h, State, Method, Listen } from '@stencil/core';

export type Cerveza = {
  id: number;
  nombre: string,
  descripcion: string,
  imagen: string,
  estado: boolean,
};

export type punkApiBeer = {
  id: number,
  name: string,
  tagline: string,
  first_brewed: string,
  description: string,
  image_url: string,
  abv: number,
  ibu: number,
  target_fg: number,
  target_og: number,
  ebc: number,
  srm: number,
  ph: number,
  attenuation_level: number,
  volume: {
    value: number,
    unit: string
  },
  boil_volume: {
    value: number,
    unit: string
  },
  method: {
    mash_temp:
    {
      temp: {
        value: number,
        unit: string
      },
      duration: number,
    }[],
    fermentation: {
      temp: {
        value: number,
        unit: string
      }
    },
    twist: null
  },
  ingredients: {
    malt: [
      {
        name: string,
        amount: {
          value: number,
          unit: string
        }
      }
    ],
    hops: [
      {
        name: string,
        amount: {
          value: number,
          unit: string
        },
        add: string,
        attribute: string
      },
      {
        name: string,
        amount: {
          value: number,
          unit: string
        },
        add: string,
        attribute: string
      },

    ],
    yeast: string
  },
  food_pairing: string[],
  brewers_tips: string,
  contributed_by: string
};

type Contacto = {
  nombre: string,
  telefono: string,
  fecha: string,
  genero: string,
  listaBeers: Cerveza[];
}

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})


export class AppForm {
  public url: string = 'https://api.punkapi.com/v2/beers?page=5&per_page=10';
  private singleBeer!: Cerveza;
  public beerListDeContacto: Cerveza[] = [];
  private listaBeer: Cerveza[] = [];
  public checksCounter: Number = 0;

  // Definimos lo que a continuacion sera nuestro FormControl y FormGroup de Angular y los distintos inputs.
  @State() formControls = {
    nameValue: {
      value: null,
      validate: value => {
        if (value) {
          return true;
        } else {
          return false;
        }
      },
      isValid: false
    },
    phoneValue: {
      value: null,
      validate: value => {
        if (value) {
          return true;
        } else {
          return false;
        }
      },
      isValid: false
    },
    dateValue: {
      value: null,
      validate: value => {
        if (value) {
          return true;
        } else {
          return false;
        }
      },
      isValid: false
    },
    genderValue: {
      value: null,
      validate: value => {
        if (value) {
          return true;
        } else {
          return false;
        }
      },
      isValid: false
    }
  };

  // definimos un estado para el control del estado del formulario
  @State() submitted = false;

  @State() numBeers = false;

  componentDidLoad() {
    // Aquí seteamos cuales van a ser las funciones validadoras de los distintos inputs que tenemos
    // ( en el component did load para que se carguen dichas funciones despues de que se haya renderizado el componente y no nos 
    // aparezcan los mensages de error de validacion antes de que el usuario haya podido si quiera introducir valores)
    this.formControls.nameValue.validate = value => {
      if (value && value.length > 3 && value.length < 30) {
        return true;
      } else {
        return false;
      }
    };

    this.formControls.phoneValue.validate = value => {
      if (value && value.length == 9) {
        return true;
      } else {
        return false;
      }
    };

    this.formControls.dateValue.validate = value => {
      if (value) {
        return true;
      } else {
        return false;
      }
    };

  }

  // Metodo que nos permite actualizar los values de los distintos elementos de nuestro FormControl
  @Method() async changeFormValue(controlName, value) {
    this.formControls = {
      ...this.formControls,
      [controlName]: {
        ...this.formControls[controlName],
        value: await value,
        isValid: await this.formControls[controlName].validate(value)
      }
    };
    //console.log(this.formControls[controlName].value)

  }



  //metodo para la correcta comprobacion antes de enviar los datos del formulario.
  async handleSubmit(e) {
    e.preventDefault();
    this.submitted = true;
    let isFormValid = true;
    //--------- Guardamos las cervezas seleccionadas en un array, que será el de las cervezas que le gustan a nuestro contacto actual-----
    this.beerListDeContacto = []
    for (let j = 0; j < 10; j++) {
      if (this.listaBeer[j].estado == true) {
        await this.beerListDeContacto.push(this.listaBeer[j])
      }
    }
    //Run all validation functions
    for (let controlName in this.formControls) {
      let control = this.formControls[controlName];
      await control.validate(control.value);
      if (!control.isValid || (this.beerListDeContacto.length > 3 || this.beerListDeContacto.length < 1)) {
        isFormValid = false;
        console.log('no puedes enviar el formulario')
      } else {
        continue
      }
    }
    if (isFormValid == true) {
      let contactoTest: Contacto = await { nombre: this.formControls.nameValue.value, telefono: this.formControls.phoneValue.value, fecha: this.formControls.dateValue.value, genero: this.formControls.genderValue.value, listaBeers: this.beerListDeContacto }
      await localStorage.setItem(`${this.formControls.nameValue.value}`, JSON.stringify(contactoTest))
      alert('contacto guardado!!')
      this.reload();
    }
    console.log(this.formControls);
    console.log("Form valid: ", isFormValid);

  }



  reload(): void {
    window.location.reload();
  }

  //-------------------------------------------------- Correspondiente a BeerCards:  ------------------------------------------------------------


  async componentWillLoad() {
    let nombre
    let descripcion
    let imagen
    let id
    let state

    for (let i = 0; i < 10; i++) {
      await fetch(this.url)
        .then(response => response.json())
        .then((data: punkApiBeer[]) => {
          id = data[i].id;
          nombre = data[i].name;
          descripcion = data[i].description;
          imagen = data[i].image_url;
          state = false;
        }
        )
      this.singleBeer = { id: id, nombre: nombre, descripcion: descripcion, estado: state, imagen: imagen }
      this.listaBeer.push(this.singleBeer)
    }
    console.log(this.listaBeer)

  };



  @Listen('checker', { target: 'body' }) checkerHandler(event: CustomEvent<Number>) {
    this.checksCounter = event.detail
    console.log('ChecksCounter:', this.checksCounter)
  }


  //------------------------------------------------------Fin de Beercards stuff---------------------------------------------------------------




  render() {
    return (
      <div class="app-form">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div class="app-form__inputWrapper">
            <div class="app-form__inputWrapper--fixedText"> <label htmlFor="nombre">Nombre: </label>
              <input type="text" name='nombre' value={this.formControls.nameValue.value} onInput={(e: any) => this.changeFormValue('nameValue', e.target.value)} />
            </div>
            <div class="app-form__validatorAlert--wrapper">{this.formControls.nameValue.isValid == false && <p class={'app-form__validatorAlert'}> Debes introducir un nombre de entre 3 y 30 caracteres.  </p>}</div>
          </div>

          <div class="app-form__inputWrapper">
            <div class="app-form__inputWrapper--fixedText"> <label htmlFor="telefono">Teléfono: </label>
              <input type="tel" name='telefono' pattern="[0-9]{9}" placeholder='XXXXXXXXX' value={this.formControls.phoneValue.value} onInput={(e: any) => this.changeFormValue('phoneValue', e.target.value)} />
            </div>
            <div class="app-form__validatorAlert--wrapper">{this.formControls.phoneValue.isValid == false && <p class={'app-form__validatorAlert'}> Debes introducir un número de teléfono de 9 dígitos.  </p>}</div>
          </div>

          <div class="app-form__inputWrapper">
            <div class="app-form__inputWrapper--fixedText"> <label htmlFor="fecha">Fecha de Nacimiento: </label>
              <input type="date" name='fecha' value={this.formControls.dateValue.value} onInput={(e: any) => this.changeFormValue('dateValue', e.target.value)} />
            </div>
            <div class="app-form__validatorAlert--wrapper">{this.formControls.dateValue.isValid == false && <p class={'app-form__validatorAlert'}> Debes introducir la fecha de nacimiento.  </p>}</div>
          </div>

          <div class="app-form__inputWrapper">
            <div class="app-form__inputWrapper--fixedText"> <label htmlFor="sexo">Género:  </label>
              <input type="radio" name="sexo" value='masculino' onInput={(e: any) => this.changeFormValue('genderValue', e.target.value)} />Masculino
              <input type="radio" name="sexo" value='femenino' onInput={(e: any) => this.changeFormValue('genderValue', e.target.value)} />Femenino
            </div>
            <div class="app-form__validatorAlert--wrapper">{this.formControls.genderValue.isValid == false && <p class={'app-form__validatorAlert'}> Debes introducir su género.  </p>}</div>
          </div>

          <div class="app-form__inputWrapper">
            <div class="app-form__inputWrapper--fixedText">
              <app-beercards listaBeer={this.listaBeer} changeFormValue={this.changeFormValue} >
              </app-beercards>
            </div>
          </div>

          <div class="app-form__validatorAlert--wrapper">
            {(this.checksCounter < 1 || this.checksCounter < 3) && <p class={'app-form__validatorAlert'}> Debes seleccionar entre 1 y 3 cervezas favoritas.  </p>}
          </div>


          <div class="app-form__btnWrapper">
            <input class="app-form__btn--guardar" type="submit" value="Guardar" />
          </div>
          <div class="app-form__btnWrapper">
            <button class="app-form__btn--borrar" onClick={this.reload} >Borrar</button>
          </div>
        </form>
      </div>
    );
  }

}
