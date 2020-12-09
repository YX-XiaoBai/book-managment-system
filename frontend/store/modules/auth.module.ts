import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
class Tutorial extends VuexModule {
  public title: string = "";

  @Mutation
  public setTitle(newTitle: string): void {
    this.title = newTitle;
  }
  @Action
  public updateTitle(newTitle: string): void {
    this.context.commit("setTitle", newTitle);
  }

  get titleUpperCase(): string {
    return this.title.toUpperCase();
  }
}

export default Tutorial;
