
import {
  ComponentRef,
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  ViewContainerRef
} from '@angular/core';
import { DynamicNodeComponent } from '../dynamic-node.component';
import { jsPlumb } from 'jsplumb';
@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {

  jsPlumbInstance = jsPlumb.getInstance();
  private rootViewContainer: any;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  public setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  public addDynamicNode(node: any) {
    const factory = this.factoryResolver.resolveComponentFactory(DynamicNodeComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    (<any>component.instance).node = node;
    (<any>component.instance).jsPlumbInstance = this.jsPlumbInstance;

    this.rootViewContainer.insert(component.hostView);
  }

  public clear() {
    this.rootViewContainer.clear();
  }
}

