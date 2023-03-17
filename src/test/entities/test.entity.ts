import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TestEntity {
  @Field(() => String)
  hello: string;
}
